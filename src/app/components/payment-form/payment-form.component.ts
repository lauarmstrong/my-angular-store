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
    cardNumber: '',
  };

  constructor(private router: Router, private httpService: HttpService) {
    this.address = {
      name: '',
      email: '',
      phone: '',
      firstLineAddress: '',
      postcode: '',
      cardNumber: '',
    };
  }

  ngOnInit(): void {}
  // addAddress(address: Address): void {
  //   alert('Address added!');
  // }

  submitForm(data: Address): void {
    // const address = {
    //   name: this.address.name,
    //   email: this.address.email,
    //   phone: this.address.phone,
    //   firstLineAddress: this.address.firstLineAddress,
    //   postcode: this.address.postcode,
    //   cardNumber: this.address.cardNumber,
    // };
    this.address = data;
    alert(`Thanks for the order ${data.name}!`);
    this.httpService.addAddressToOrder(data);
    this.router.navigate(['/order-confirmation']);
    // this.addAddress.emit(address);
    // this.address.name = '';
    // this.address.email = '';
    // this.address.phone = '';
    // this.address.firstLineAddress = '';
    // this.address.postcode = '';
    // this.address.cardNumber = '';
  }
}
