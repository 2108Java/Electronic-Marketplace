import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../categories';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any = []

  constructor(private http: HttpClient, public itemListService: ItemListService, private router: Router) { }

  public categories: Array<Categories> = [
    { name: "Laptops", catId: "abcat0502000" },
    { name: "Video Games", catId: "pcmcat1484080052161" },
    { name: "Cameras", catId: "abcat0401005" },
    { name: "Phones", catId: "abcat0800000" },
    { name: "HeadPhones", catId: "abcat0204000" },
    { name: "SmartWatch", catId: "pcmcat321000050004" },
    { name: "IpadAccessories", catId: "pcmcat309900050001" }
  ];

  getData(category: string) {

    const baseUrl1 = 'https://api.bestbuy.com/v1/products(categoryPath.id=';
    const baseUrl2 = '&salePrice>40)?format=json&show=sku,name,salePrice,image&apiKey=wig6FB7qtD5kSMKnINosQNdv';
    const productsUrl = baseUrl1 + category + baseUrl2;
    this.itemListService.clear();

    let cat = this.categories.find(c => c.catId === category)!;
    let routeName: string = 'items/' + cat.name;
    this.http.get(productsUrl).subscribe((res: any) => {
      this.data = res;
      this.itemListService.add(this.data['products']);
    })

  }

  ngOnInit(): void {
  }

}
