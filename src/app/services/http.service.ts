import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  cartItemsList: Product[] = [];
  totalPrice: number = 0;
  address: Address = {
    name: '',
    email: '',
    phone: '',
    firstLineAddress: '',
    postcode: '',
    cardNumber: '',
  };
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json');
  }
  addProductToCart(product: Product) {
    // Check if product has already been added to cart
    if (this.cartItemsList.some((p) => p.id === product.id)) {
      alert(`You now have ${product.quantity} ${product.name} in your cart :)`);
    } else {
      this.cartItemsList.push(product);
      alert(`${product.quantity} ${product.name} added to your cart!`);
    }
    this.calculateCartCount();
    localStorage.setItem('cartProducts', JSON.stringify(this.cartItemsList));
    return this.cartItemsList;
  }

  removeProductFromCart(product: Product) {
    this.cartItemsList = this.cartItemsList.filter((p) => p.id !== product.id);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartItemsList));
  }

  getCartItems(): Product[] {
    let fetchedCartItems = JSON.parse(localStorage.getItem('cartProducts')!);
    if (fetchedCartItems === null) {
      fetchedCartItems = [];
    }
    return fetchedCartItems;
  }

  calculateCartCount(): number {
    return this.getCartItems().length;
  }

  calculateCartTotal(): number {
    this.totalPrice = 0;
    this.cartItemsList = this.getCartItems();
    for (let i = 0; i < this.cartItemsList.length; i++) {
      this.totalPrice +=
        this.cartItemsList[i].price * this.cartItemsList[i].quantity;
    }
    this.totalPrice = Math.round(this.totalPrice * 100) / 100;

    return this.totalPrice;
  }

  addAddressToOrder(data: Address): void {
    this.address = data;
  }

  getAddress(): Address {
    return this.address;
  }

  getProductById(id: Number): any {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find((p) => p.id === id))
    );
  }

  clearCart(): void {
    this.cartItemsList = [];
    localStorage.setItem('cartProducts', JSON.stringify(this.cartItemsList));
  }
}
