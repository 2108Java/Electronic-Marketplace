import { HttpClient } from '@angular/common/http';
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

  public cartSize: number = 0;

  constructor(private myHttpClient: HttpClient) { }

  //getItem() {
    //return this.productList.asObservable();
  //}

  getItem(): Observable<Item[]>{
    console.log("getting cart items");
    let passItems = of(this.cartList);
    return passItems;
  }

  setItem(product: any) {
    this.cartList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
  //addtoCart(itemJson: string){
    //this.cartItemsJson = JSON.stringify(itemJson);
    //this.cartList = JSON.parse(itemJson);

    this.cartSize = this.cartList.push(product);
    
    //$this.productList.next(this.cartList);
    this.getTotal();
    console.log(this.cartList);
    //console.log(typeof this.cartList);
    console.log(this.productList);
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

  getCartSize(): Observable<string> {
    let cartSizeString: string = this.cartSize.toString();
    return of(cartSizeString);
  }

  persistCartItem(product: Item): Observable<any>{
    //console.log(currentUser);
    let itemSku: number = product.sku;
    //let skuString: string  = itemSku.toString();
    let user_id: number = 1;
    let cartIndex: any = { "sku": itemSku, "user_id_fk": 1};
    
    return this.myHttpClient.post<any>("http://localhost:8080/addToCart",cartIndex, {withCredentials: true});
  };
}