import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path:'app-order-form', component: OrderFormComponent},
  {path:'app-order-form/:id', component: OrderFormComponent},
  {path:'app-order-list', component: OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskOrderRoutingModule { }
