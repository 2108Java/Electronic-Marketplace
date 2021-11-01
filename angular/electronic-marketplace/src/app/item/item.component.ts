import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemListService } from '../item-list.service';
import { Item } from '../item.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Categories } from '../categories';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit{
  items: Item[] = [];
  public data: any = []
  public name :string ='';
  public size: number = 5;

 

  constructor(public itemListService: ItemListService, private router: Router, 
              private http: HttpClient, private cartService: CartService){ }

  ngOnInit(): void {
    this.getItems();
    //console.log("Made it to the Items Page");
  }

  getItems(): void{
    //this.items = [];
    //console.log("Running getItems from Item");
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

    public categories: Array<Categories> = [
      { name: "Laptops", catId: "abcat0502000"},
      { name: "Video Games", catId: "pcmcat1484080052161"},
      { name: "Cameras", catId: "abcat0401005"}
    ];
  
    getData(category: string) {
      //console.log("Running getData from Item");
      const baseUrl1  = 'https://api.bestbuy.com/v1/products(categoryPath.id=';
      const baseUrl2  = '&salePrice>40)?format=json&show=sku,name,salePrice,image&apiKey=wig6FB7qtD5kSMKnINosQNdv';
      const productsUrl = baseUrl1+category+baseUrl2;
      
      this.itemListService.clear();

      let cat = this.categories.find(c => c.catId === category)!;
      let routeName: string = 'items/'+cat.name;
      
      this.http.get(productsUrl).subscribe((res) => {
        this.data = res;
        //console.log(res);
        //console.log(this.data);
        this.itemListService.add(this.data['products']);
        this.router.navigate([routeName]);
        this.getItems();
      })
    }

    addToCart(item: Item) {
      //let itemString: string = JSON.stringify(item);
      //console.log(this.items);
      this.cartService.addtoCart(item);
      //this.headerComponent.getCartSize();

      this.cartService.persistCartItem(item).subscribe(
        response => {
          console.log(response);
        });
    }
}
