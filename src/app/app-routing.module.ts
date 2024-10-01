import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo : '/home', pathMatch: 'full'},
  {path: 'products', component: ProductsTableComponent},
  {path: 'product/:id', component: ProductItemComponent},
  {path: 'product' ,  component: ProductItemComponent},
  {path: 'home' ,  component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
