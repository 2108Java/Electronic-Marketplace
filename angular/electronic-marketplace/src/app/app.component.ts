import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Item } from './item.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    
  }
  
  /*public product :any;
  constructor(private dataService: DataService){}
  getItem():void{
    this.dataService.getItems()
    .subscribe(res=>{
      this.product=res.products;

  })}*/
  
    
  
}
