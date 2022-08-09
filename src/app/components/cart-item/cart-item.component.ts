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
  @Output() notifyEdit: EventEmitter<Product> = new EventEmitter();
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
    this.totalPrice =
      Math.round(this.product.price * this.product.quantity * 100) / 100;
  }
  calculatePrice(product: Product): void {
    this.totalPrice = Math.round(product.price * product.quantity * 100) / 100;
  }

  onIncrement(product: Product): void {
    product.quantity += 1;
    this.calculatePrice(product);
    this.notifyEdit.emit(product);
  }
  onDecrement(product: Product): void {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
    this.calculatePrice(product);
    this.notifyEdit.emit(product);
  }

  async onDelete(product: Product): Promise<void> {
    this.notifyDelete.emit(product);
  }
}
