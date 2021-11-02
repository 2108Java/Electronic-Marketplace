import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from './item.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //public cartList: any = [];
  public cartList: Item[] = [];

  get getCartList(): Item[] {
    return this.cartList;
  }
  set setCartList(val: Item[]) {
    this.cartList = val;
  }

  public productList = new BehaviorSubject<any>([]);

  public cartSize: number = 0;

  constructor(private myHttpClient: HttpClient) { }

  //getItem() {
  //return this.productList.asObservable();
  //}

  getItem(): Observable<Item[]> {
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
    this.productList.next(this.cartList);

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
    this.productList.next(this.cartList);
  }

  removeAllCart() {
    this.cartList.splice(0, this.cartList.length);
    this.productList.next(this.cartList);
  }

  getCartSize(): Observable<string> {
    let cartSizeString: string = this.cartSize.toString();
    return of(cartSizeString);
  }

  persistCartItem(product: Item): Observable<HttpResponse<Item>> {

    //let itemSku: number = product.sku;
    //let cartIndex: any = {"cartId": 0, "sku": itemSku, "user": null};

    return this.myHttpClient.post<Item>("http://localhost:8080/addToCart", product, { withCredentials: true, observe: 'response' as 'response' });
  };


  persistPurchasedItems(products: Item[]): Observable<HttpResponse<Item>> {

    //let itemSku: number = product.sku:
    //let cartIndex: any = {"purchaseId": 0, "sku": itemSku, "user": null};
    //let body: any  = [];
    //for (var index of products){
    // let itemSku: = products[index].products.sku;
    //}
    return this.myHttpClient.post<Item>("http://localhost:8080/purchase", products, { withCredentials: true, observe: 'response' as 'response' });
  };
}