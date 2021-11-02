import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrandTotalService {

  grandTotal = 0;

  get total(): number {
    return this.grandTotal;
  }
  set total(val: number) {
    this.grandTotal = val;
  }

  constructor() { }
}
