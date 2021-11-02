import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { GrandTotalService } from '../grand-total.service';
import { CartNumberService } from '../header/cart-number.service';
import { Item } from '../item.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  grandTotal = 0;

  public cartItems: Item[] = [];

  constructor(private router: Router, private cartService: CartService, private grandTotalService: GrandTotalService) { }

  ngOnInit(): void {
    this.getItemsFromCart();
    CartNumberService.cartNumber = this.cartItems.length;
  }

  getItemsFromCart() {
    //this.cartItems = [];
    this.cartService.getItem().subscribe(items => this.cartItems = items);
    //this.cartItems = this.cartService.cartList;
    console.log(this.cartItems);

    this.grandTotal = 0;
    this.cartItems.forEach((arrayItem) => {
      var x = arrayItem.salePrice;
      this.grandTotal += x;
      this.grandTotalService.grandTotal = this.grandTotal;
      console.log(x);
    });
  }

  purchaseItems() {
    this.cartService.persistPurchasedItems(this.cartItems).subscribe(
      response => {
        //currentUser.setU = response;
        console.log(response);
        this.router.navigate(['/']);
        //console.log(currentUser);
      });
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);

    this.grandTotal = 0;
    this.cartItems.forEach((arrayItem) => {
      var x = arrayItem.salePrice;
      this.grandTotal += x;
      this.grandTotalService.grandTotal = this.grandTotal;
      console.log(x);
    });

  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
}
