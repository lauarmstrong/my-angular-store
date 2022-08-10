import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../models/Address';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  address: Address = {
    name: '',
    email: '',
    phone: '',
    firstLineAddress: '',
    postcode: '',
    cardNumber: 0,
  };

  constructor(private router: Router, private httpService: HttpService) {
    this.address = {
      name: '',
      email: '',
      phone: '',
      firstLineAddress: '',
      postcode: '',
      cardNumber: 0,
    };
  }

  ngOnInit(): void {}

  submitForm(data: Address): void {
    this.address = data;
    alert(`Thanks for the order ${data.name}!`);
    this.httpService.addAddressToOrder(data);
    this.httpService.clearCart();
    this.router.navigate(['/order-confirmation']);
  }
}
