import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.module';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url='https://api.bestbuy.com/v1/products(manufacturer=panasonic)?format=json&apiKey=wig6FB7qtD5kSMKnINosQNdv';

  constructor() { }
  /*getItems(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProduct(name:string):Observable<Item>{
    let item:Observable<Item> = this.http.get<Item>(this.url);
return item;
  }
}*/
}
