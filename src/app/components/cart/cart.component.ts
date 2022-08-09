import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItemsList: Product[] = [];
  totalPrice: number = 0;
  cartLength: number = 0;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.cartItemsList = this.httpService.getCartItems();
    this.totalPrice = this.httpService.calculateCartTotal();
    this.cartLength = this.cartItemsList.length;
  }

  async removeProduct(product: Product): Promise<void> {
    try {
      await this.httpService.removeProductFromCart(product);
    } catch (err) {
      console.log(err);
    }
    this.totalPrice = this.httpService.calculateCartTotal();
    this.cartItemsList = this.httpService.getCartItems();
  }

  async editQuantity(product: Product): Promise<void> {
    localStorage.setItem('cartProducts', JSON.stringify(this.cartItemsList));
    try {
      await this.httpService.calculateCartTotal();
    } catch (err) {
      console.log(err);
    }
    this.totalPrice = this.httpService.calculateCartTotal();
  }
}
