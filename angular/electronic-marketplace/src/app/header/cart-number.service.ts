import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartNumberService {

  cartNumber = 0;
  static cartNumber: number;

  get total(): number {
    return this.cartNumber;
  }
  set total(val: number) {
    this.cartNumber = val;
  }

  constructor() { }
}
