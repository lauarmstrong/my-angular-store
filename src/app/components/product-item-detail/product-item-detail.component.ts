import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

import { Product } from '../../models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {
    id: 1,
    name: '',
    quantity: 1,
    price: 0,
    description: '',
    url: '',
  };
  id: number = 0;
  errorMessage = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
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
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.httpService.getProductById(this.id).subscribe((res: Product) => {
      this.product = res;
    });
  }
}
