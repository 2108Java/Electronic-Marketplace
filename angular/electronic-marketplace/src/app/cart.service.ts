import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { Item } from './item.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //public cartList: any = [];
  public cartList: Item[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  //getItem() {
    //return this.productList.asObservable();
  //}

  getItem(): Observable<Item[]>{
    let passItems = of(this.cartList);
    return passItems;
  }

  setItem(product: any) {
    this.cartList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartList.push(product);
    this.productList.next(this.cartList);
    this.getTotal();
    console.log(this.cartList);
    console.log(typeof this.cartList);
    //console.log(this.productList);
  }

  getTotal() {
    let finalTotal = 0;
    this.cartList.map((a: any) => {
      finalTotal += a.total;
    })
    return finalTotal;
  }

  removeItem(product: any) {
    this.cartList.map((a: any, index: any) => {
      if (product.name === a.name) {
        this.cartList.splice(index, 1);
      }
    })
  }

  removeAllCart() {
    this.cartList = [];
    this.productList.next(this.cartList);
  }
}