import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable } from 'rxjs';
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
    this.cartItemsList.push(product);
    alert(`${product.quantity} ${product.name}(s) added to your cart!`);
    return this.cartItemsList;
  }

  removeProductFromCart(product: Product) {
    this.cartItemsList = this.cartItemsList.filter((p) => p.id !== product.id);
  }

  getCartItems(): Product[] {
    return this.cartItemsList;
  }

  calculateCartTotal(): number {
    this.totalPrice = 0;
    this.cartItemsList = this.getCartItems();
    for (let i = 0; i < this.cartItemsList.length; i++) {
      this.totalPrice +=
        this.cartItemsList[i].price * this.cartItemsList[i].quantity;
    }
    return Math.round(this.totalPrice * 100) / 100;
  }

  addAddressToOrder(data: Address): void {
    this.address = data;
  }

  getAddress(): Address {
    return this.address;
  }
}
