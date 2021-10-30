import { Component, NgModule, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';
import { Item } from '../item.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  items: Item[] = [];
  public name :string ='';

  constructor(public itemListService: ItemListService, private router: Router, 
              private http: HttpClient, private cartService: CartService){ }

  ngOnInit(): void {
    this.getItems();
    console.log("Made it to the Items Page");
  }

  getItems(): void{
    this.items = [];
    this.itemListService.getItems().subscribe(items => this.items = items);
    //console.log(this.items);
  }

  getItem(){
    console.log("Calling getItem");
    /*let itemObservable: Observable<Item>= this.ajaxCall(this.name);
    itemObservable.subscribe((res)=>{
      this.data = res;
      this.data = this.data['products'];
      this.name=this.data.name;
      this.image=this.data.image;
      this.salePrice=this.data.salePrice;
      console.log(this.name);
      */
    }

    addToCart(item: Item) {
      //console.log(this.items);
      this.cartService.addtoCart(item);
    }
}
