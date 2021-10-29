import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

const routes :Routes=[
  { path:'items', component:ItemComponent },
  { path:'cart', component:CartComponent},
  { path: 'home', component: AppComponent },
  { path: 'categories', component: CategoryComponent }
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
  
  
})
export class AppRoutingModule { }
