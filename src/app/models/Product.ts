export class Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  url: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.quantity = 1;
    this.price = 0;
    this.description = '';
    this.url = '';
  }
}
