import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/Address';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  address: Address = {
    name: '',
    email: '',
    phone: '',
    firstLineAddress: '',
    postcode: '',
    cardNumber: '',
  };
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.address = this.httpService.getAddress();
  }
}
