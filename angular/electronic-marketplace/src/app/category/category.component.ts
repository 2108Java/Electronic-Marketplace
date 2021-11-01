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
  
  constructor(private http: HttpClient, public itemListService: ItemListService,  private router: Router) {}

  //Start BZ code:
  //public itemsList: string = "";
  public categories: Array<Categories> = [
    { name: "Laptops", catId: "abcat0502000"},
    { name: "Video Games", catId: "pcmcat1484080052161"},
    { name: "Cameras", catId: "abcat0401005"}
  ];

  getData(category: string) {
    //const url = 'https://api.bestbuy.com/v1/products(manufacturer=sony)?format=json&apiKey=wig6FB7qtD5kSMKnINosQNdv';
    // const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
    //this.http.get(url).subscribe((res) => {
      //this.data = res;
      //this.data = this.data['products'];
      //console.log(this.data);
      //console.log(typeof this.data);
    //})
    console.log("Running getData from category");
    const baseUrl1  = 'https://api.bestbuy.com/v1/products(categoryPath.id=';
    const baseUrl2  = '&salePrice>40)?format=json&show=sku,name,salePrice,image&apiKey=wig6FB7qtD5kSMKnINosQNdv';
    const productsUrl = baseUrl1+category+baseUrl2;
    
    //this.router.navigate(['home']);
    this.itemListService.clear();
    //console.log("clearing list")

    let cat = this.categories.find(c => c.catId === category)!;
    //console.log(cat.name);
    let routeName: string = 'items/'+cat.name;
    this.http.get(productsUrl).subscribe((res) => {
      this.data = res;
      this.itemListService.add(this.data['products']);
      //this.data = this.data['products'];
      //console.log(this.data);
      this.router.navigate([routeName]);
    })


  }

  checkStoredData() {
    console.log(this.data);
    console.log(typeof this.data);
  }

  ngOnInit() {
    //this.getData()
  }
}