import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Item } from '../item.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService) { }

  public cartSize: number = 0;

  public items: Item[] =[];

  ngOnInit(): void {
    //this.cartService.getCartSize().subscribe(returnItems => this.items = returnItems);

   // this.CartService.getItem()
    //.subscribe(res=>{
      //this.totalItem= res.length;
      this.cartService.getItems().subscribe(res=>{this.cartSize= res.length});
  }
}