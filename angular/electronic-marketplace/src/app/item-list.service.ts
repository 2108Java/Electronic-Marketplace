import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Item } from './item.module';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  items: Item[] = [];
  itemsJson: string = "";
  
  public add(itemJson: string){
      this.itemsJson = JSON.stringify(itemJson);
      //let mySubString = this.itemsJson.substring(
        //this.itemsJson.indexOf("{"), 
        //this.itemsJson.lastIndexOf("}")
    //);
    
      //console.log(this.itemsJson);
      this.items = JSON.parse(this.itemsJson);
      //console.log(this.items[1]);
  }

  public clear(){
    console.log("clearing list")
    this.items= [];
    console.log(this.items[0]);
  }

  public getItems(): Observable<Item[]>{
    let passItems = of(this.items);
    return passItems;
  }
}