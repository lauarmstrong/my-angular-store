import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList?: Product[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.productList = data;
      for (let i = 0; i < this.productList.length; i++) {
        const product = this.productList[i];
        product['quantity'] = 0;
      }
    });
  }
}
