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

  public cartSize: string = "";

  ngOnInit(): void {

  }

  getCartSize(){
    this.cartService.getCartSize().subscribe(items => this.cartSize = items);
  }
}
