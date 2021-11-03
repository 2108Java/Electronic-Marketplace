import { AfterViewInit, Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Item } from '../item.module';
import { CartNumberService } from './cart-number.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService, public cartNumberService: CartNumberService) { }

  public cartSize: number = 0;

  totalItem: number = 0;

  ngOnInit(): void {
    this.cartService.getItems()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }


}

