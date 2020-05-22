import { Component, OnInit } from '@angular/core';
import { ShippingCartService } from './shipping-cart.service';

@Component({
  selector: 'mt-shipping-cart',
  templateUrl: './shipping-cart.component.html',
  styleUrls: ['./shipping-cart.component.css']
})
export class ShippingCartComponent implements OnInit {

  constructor(private shippingCartService: ShippingCartService) { }

  ngOnInit() {

  }

  items() : any[] {
    return this.shippingCartService.items;
  }

  total(): number {
    return this.shippingCartService.total();
  }

  clear() {
    this.shippingCartService.clear();
  }

  removeItem(item: any){
    this.shippingCartService.reoveItem(item);
  }

  addItem(item: any) {
    this.shippingCartService.addItem(item);
  }

}
