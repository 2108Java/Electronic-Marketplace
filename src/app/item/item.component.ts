import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item.module';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  title = 'e-market';
  public productList: any ;
  public filterdata:any=[];
 
  constructor(private http: HttpClient, private cartService:CartService) {
  }

   url = 'https://api.bestbuy.com/v1/products(manufacturer=sony)?format=json&apiKey=wig6FB7qtD5kSMKnINosQNdv';
  /*getData() {

    
    // const url = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    this.http.get(this.url).subscribe((res) => {
      this.productList = res;
      this.productList = this.productList['products'];
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
      console.log(typeof this.productList);
    })
  }

  checkStoredData() {
    console.log(this.productList);
    console.log(typeof this.productList);
  }*/

  item:Item | null = null;
  public name :string ='';
  public image:string='';
  public salePrice:number=-1;
  
  
  ajaxCall(name:string): Observable<Item>{
    let obs:Observable<Item> =this.http.get<Item>(this.url);
    return obs;

  }
  //private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  //private fullUrl: string = '';

  getItem(){
     
  
   
    let itemObservable: Observable<Item>= this.ajaxCall(this.name);
    itemObservable.subscribe((res)=>{
      this.productList = res;
      this.productList = this.productList['products'];
      this.name=this.productList.name;
      this.image=this.productList.image;
      this.salePrice=this.productList.salePrice;
      console.log(this.name);
    
    

    })
      


    

      }
      addToCart(item: any) {
        this.cartService.addtoCart(item);
      }

    

  
    
  
  
      ngOnInit() {
        this.http.get(this.url).subscribe((res) => {
          this.productList = res;
          this.productList = this.productList['products'];
          
          this.productList.forEach((a: any) => {
            Object.assign(a, { quantity: 1, total: a.salePrice });
          });
          console.log(this.productList);
          
        });
        
          this.getItem();

        
      }
  

  

}