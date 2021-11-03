import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { GrandTotalService } from '../grand-total.service';
import { Item } from '../item.module';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutTotal = 0;
  cartList: Item[] = [];

  constructor(private router: Router, private totalAmountService: GrandTotalService, private cartService: CartService) { }

  ngOnInit(): void {
    this.checkoutTotal = this.totalAmountService.grandTotal;
  }

  purchaseItems() {
    this.cartService.persistPurchasedItems(this.cartService.getCartList).subscribe(
      response => {
        ;
        console.log(response);

        this.cartService.removeAllCart();

        alert("Thank you for purchasing!")

        this.router.navigate(['/categories']);
      });
  }
}
