import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { RouteGuard } from './route.guard';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes :Routes=[
  { path: 'user', component: UserComponent },
  { path: 'home', component: AppComponent, canActivate: [RouteGuard]},
  { path: 'categories', component: CategoryComponent, canActivate: [RouteGuard] },
  { path: 'items', component:ItemComponent,canActivate: [RouteGuard]},
  { path: 'cart', component:CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
  
  
})
export class AppRoutingModule { }
