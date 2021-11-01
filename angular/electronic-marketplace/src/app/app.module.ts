import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartService } from './cart.service';
import { ItemListService } from './item-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ItemComponent,
    CategoryComponent,
    UserComponent,
    HomeComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [DataService, CartService, ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
