import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from './item.module';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //public cartList: any = [];
  public cartList: Item[] = [];
  public productList = new BehaviorSubject<any>([]);

  get getCartList(): Item[] {
    return this.cartList;
  }
  set setCartList(val: Item[]) {
    this.cartList = val;
  }

  getItems() {
    return this.productList.asObservable();
  }

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

    //return this.myHttpClient.post<Item>("http://localhost:8081/addToCart%22,product,%7BwithCredentials: true,observe: 'response' as 'response'});
    return this.myHttpClient.post<Item>("http://ec2-13-59-174-104.us-east-2.compute.amazonaws.com:8081/addToCart", product, { withCredentials: true, observe: 'response' as 'response' });
  };


  persistPurchasedItems(products: Item[]): Observable<HttpResponse<Item>> {

    //let itemSku: number = product.sku:
    //let cartIndex: any = {"purchaseId": 0, "sku": itemSku, "user": null};
    //let body: any  = [];
    //for (var index of products){
    // let itemSku: = products[index].products.sku;
    //}
    return this.myHttpClient.post<Item>("http://localhost:8081/purchase", products, { withCredentials: true, observe: 'response' as 'response' });
  };

  deleteCartItemFromDB(cartItem: Item): Observable<HttpResponse<Item>> {
    return this.myHttpClient.post<Item>("http://localhost:8081/removeFromCart", cartItem, { withCredentials: true, observe: 'response' as 'response' });
  }

  deleteCartFromDB(cart: Item[]): Observable<HttpResponse<Item[]>> {
    return this.myHttpClient.post<Item[]>("http://localhost:8081/deleteCart", cart, { withCredentials: true, observe: 'response' as 'response' });
  }
  //start new code

  addNewUser(newUser: User): Observable<HttpResponse<User>> {
    //console.log(currentUser);
    return this.myHttpClient.post<User>("http://localhost:8081/user", newUser, { withCredentials: true, observe: 'response' as 'response' });
    //return this.myHttpClient.post<User>("http://ec2-13-59-174-104.us-east-2.compute.amazonaws.com:8081/user%22,currentUser, {withCredentials: true,observe: 'response' as 'response'});

  }
}






