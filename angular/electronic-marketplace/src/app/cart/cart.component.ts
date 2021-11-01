import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Item } from '../item.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems: Item[] = [];
  constructor(private router: Router,  private cartService: CartService) { }

  ngOnInit(): void {
    this.getItemsFromCart();
  }

  getItemsFromCart(){
    //this.cartItems = [];
    this.cartService.getItem().subscribe(items => this.cartItems = items);
    //this.cartItems = this.cartService.cartList;
    console.log(this.cartItems);
  }

  purchaseItems(){
    this.cartService.persistPurchasedItems(this.cartItems).subscribe(
      response =>{
        //currentUser.setU = response;
        console.log(response);
        this.router.navigate(['/']);
        //console.log(currentUser);
      });
    }
}
