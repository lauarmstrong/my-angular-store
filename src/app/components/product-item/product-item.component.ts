import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  // onIncrement(product: Product): void {
  //   product.quantity += 1;
  // }
  // onDecrement(product: Product): void {
  //   product.quantity -= 1;
  // }

  // onDelete(product: Product): void {
  //   product.quantity = 0;
  //   this.httpService.removeProductFromCart(product);
  // }

  addToCart(product: Product): void {
    this.product.quantity = 1;
    this.httpService.addProductToCart(product);
  }
}
