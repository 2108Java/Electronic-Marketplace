import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item.module';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  items: Item[] = [];
  itemsJson: string = "";

  public add(itemJson: string) {
    console.log("adding function");
    this.itemsJson = JSON.stringify(itemJson);

    //let mySubString = this.itemsJson.substring(
    //this.itemsJson.indexOf("{"), 
    //this.itemsJson.lastIndexOf("}")
    //);

    //console.log(this.itemsJson);
    this.items = JSON.parse(this.itemsJson);
    //console.log("running add from item-list service");
    console.log("this should be in array");
    console.log(this.items);
  }

  public clear() {
    console.log("clearing list")
    this.items = [];
    //console.log(this.items[0]);
  }

  public getItems(): Observable<Item[]> {
    //console.log("running getItems from item-list service")
    let passItems = of(this.items);
    return passItems;
  }
}