import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList: any []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getItem(){
    return this.productList.asObservable();
  }
  setItem(product: any){
    this.cartList.push(...product);
    this.productList.next(product);

  }
  addtoCart(product :any){
    this.cartList.push(product);
    this.productList.next(this.cartList);
    this.getTotal();
  }
  getTotal(){
    let finalTotal =0;
    this.cartList.map((a:any) =>{
      finalTotal +=  a.total;
    })
  }
  removeItem(product:any){
    this.cartList.map((a:any, index:any)=>{
      if(product.name === a.name ){
        this.cartList.splice(index,1);
      }
    })
  }

}
