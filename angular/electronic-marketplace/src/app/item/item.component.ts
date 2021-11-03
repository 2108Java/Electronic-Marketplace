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

export class ItemComponent implements OnInit {
  items: Item[] = [];
  public data: any = []
  public name: string = '';
  public size: number = 5;

  constructor(public itemListService: ItemListService, private router: Router,
    private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemListService.getItems().subscribe(items => this.items = items);
  }

  getItem() {
  }

  public categories: Array<Categories> = [
    { name: "Laptops", catId: "abcat0502000" },
    { name: "Video Games", catId: "pcmcat1484080052161" },
    { name: "Cameras", catId: "abcat0401005" },
    { name: "Phones", catId: "pcmcat209400050001" },
    { name: "HeadPhones", catId: "abcat0204000" },
    { name: "Smart Watches", catId: "pcmcat321000050004" },
    { name: "Tablets", catId: "pcmcat209000050008" }
  ];

  getData(category: string) {
    const baseUrl1 = 'https://api.bestbuy.com/v1/products(categoryPath.id=';
    const baseUrl2 = '&salePrice>40)?format=json&show=sku,name,salePrice,image&apiKey=wig6FB7qtD5kSMKnINosQNdv';
    const productsUrl = baseUrl1 + category + baseUrl2;

    this.itemListService.clear();

    let cat = this.categories.find(c => c.catId === category)!;
    let routeName: string = 'items/' + cat.name;

    this.http.get(productsUrl).subscribe((res) => {
      this.data = res;
      this.itemListService.add(this.data['products']);
      this.router.navigate([routeName]);
      this.getItems();
    })
  }

  addToCart(item: Item) {
    this.cartService.addtoCart(item);

    this.cartService.persistCartItem(item).subscribe(
      response => {
      });
  }
}