import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { RowItemsComponent } from './row-items/row-items.component';
import { RowsOfRowItemsComponent } from './rows-of-row-items/rows-of-row-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    RowItemsComponent,
    RowsOfRowItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
