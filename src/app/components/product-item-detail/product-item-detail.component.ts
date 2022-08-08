import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  constructor() {
    // this.product = {
    //   id: 0,
    //   name: '',
    //   category: '',
    //   quantity: 0,
    //   price: 0,
    // };
  }

  ngOnInit(): void {}
}
