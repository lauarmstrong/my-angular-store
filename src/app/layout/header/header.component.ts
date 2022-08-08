import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartLength: number = 0;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.cartLength = this.httpService.getCartItems().length;
  }
}
