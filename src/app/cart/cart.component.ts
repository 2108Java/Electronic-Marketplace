import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product :any =[];
  public grandTotal !: number ;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getItem()
    .subscribe(res =>{
      this.product= res;
      this.grandTotal=this.cartService.getTotal();
    })
  }
  removeItem(item: any){
    this.cartService.removeItem(item);

  }
  emptycart(){
    this.cartService.removeAll();
  }

}
 