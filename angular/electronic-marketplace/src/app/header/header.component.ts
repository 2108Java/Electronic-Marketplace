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

  public cartSize: string = "";

  totalItem: number | undefined = 0;

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.cartService.getItem()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  getCartSize() {
    this.cartService.getCartSize().subscribe(items => this.cartSize = items);
  }
}
