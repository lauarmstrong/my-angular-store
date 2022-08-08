import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() notifyDelete: EventEmitter<Product> = new EventEmitter();
  totalPrice: number = 0;
  constructor(private httpService: HttpService) {
    this.product = {
      id: 1,
      name: '',
      quantity: 1,
      price: 0,
      description: '',
      url: '',
    };
  }

  ngOnInit(): void {
    this.totalPrice = this.product.price * this.product.quantity;
  }
  calculatePrice(product: Product): void {
    this.totalPrice = product.price * product.quantity;
  }

  onIncrement(product: Product): void {
    product.quantity += 1;
    this.calculatePrice(product);
  }
  onDecrement(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
    this.calculatePrice(product);
  }

  async onDelete(product: Product): Promise<void> {
    this.notifyDelete.emit(product);
    // try {
    //   await this.httpService.removeProductFromCart(product);
    // } catch (err) {
    //   console.log(err);
    // }
    product.quantity = 0;
    // // this.removeProductFromCart.emit(product);
    this.calculatePrice(product);
  }
}
