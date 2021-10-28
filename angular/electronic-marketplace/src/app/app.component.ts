import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-market';
  public data: any = []
  constructor(private http: HttpClient) {
  }

  getData() {
    const url = 'https://api.bestbuy.com/v1/products(manufacturer=panasonic)?format=json&apiKey=wig6FB7qtD5kSMKnINosQNdv';
    // const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
    this.http.get(url).subscribe((res) => {
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

  ngOnInit() {
    this.getData()
  }
}
