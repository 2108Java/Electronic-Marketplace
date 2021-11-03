import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../categories';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  title = 'e-market';
  public data: any = []

  constructor(private http: HttpClient, public itemListService: ItemListService, private router: Router) { }

  public categories: Array<Categories> = [
    { name: "Laptops", catId: "abcat0502000" },
    { name: "Video Games", catId: "pcmcat1484080052161" },
    { name: "Cameras", catId: "abcat0401005" },
    { name: "Phones", catId: "pcmcat209400050001" },
    { name: "HeadPhones", catId: "abcat0204000" },
    { name: "Smart Watches", catId: "pcmcat321000050004" },
    { name: "Tablets", catId: "pcmcat209000050008" }
  ];

  public catIdVG: string = "pcmcat1484080052161";
  public catIdCam: string = "abcat0401005";
  public catIdLap: string = "abcat0502000";
  public catIdPhones: string = "pcmcat209400050001";
  public catIdHead: string = "abcat0204000";
  public catIdWatches: string = "pcmcat321000050004";
  public catIdTab: string = "pcmcat209000050008";

  getData(category: string) {
    console.log("Running getData from category");
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
    })
  }

  checkStoredData() {
    console.log(this.data);
    console.log(typeof this.data);
  }

  ngOnInit() {
  }
}