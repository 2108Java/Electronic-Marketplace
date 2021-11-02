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
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent, canActivate: [RouteGuard] },
  { path: 'categories', component: CategoryComponent, canActivate: [RouteGuard] },
  { path: 'items/:id', component: ItemComponent, canActivate: [RouteGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]



})
export class AppRoutingModule { }
