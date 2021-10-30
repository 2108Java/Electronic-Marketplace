import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Item } from '../item.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title = 'e-market';
  public data: any = []
  public filterdata: any = []
  constructor(private http: HttpClient, private cartService: CartService) {
  }

  url = 'https://api.bestbuy.com/v1/products(manufacturer=sony)?format=json&apiKey=wig6FB7qtD5kSMKnINosQNdv';

  getData() {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
      this.data = this.data['products'];
      console.log(this.data);
      console.log(typeof this.data);
    })
  }

  checkStoredData() {
    console.log(this.data);
    console.log(typeof this.data);
  }

  item: Item | null = null;
  public name: string = '';
  public image: string = '';
  public salePrice: number = -1;

  ajaxCall(name: string): Observable<Item> {
    let obs: Observable<Item> = this.http.get<Item>(this.url);
    return obs;

  }
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private fullUrl: string = '';

  getItem() {

    let itemObservable: Observable<Item> = this.ajaxCall(this.name);
    itemObservable.subscribe((res) => {
      this.data = res;
      this.data = this.data['products'];
      this.name = this.data.name;
      this.image = this.data.image;
      this.salePrice = this.data.salePrice;
      console.log(this.name);
    })
  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }


  ngOnInit() {
    this.getData();
    this.getItem();

    this.data.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price })
    });
  }
}
