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
  cartItemsList: Product[] = [];
  isItemInCart: Boolean = true;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    product.quantity = this.product.quantity + 1;
    this.httpService.addProductToCart(product);
  }
}
