export class Address {
  name: string;
  email: string;
  phone: string;
  firstLineAddress: string;
  postcode: string;
  cardNumber: number;

  constructor() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.firstLineAddress = '';
    this.postcode = '';
    this.cardNumber = 0;
  }
}
