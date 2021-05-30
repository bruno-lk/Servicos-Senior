import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './task-order/order-form/order-form.component';
import { TaskFormComponent } from './task/task-form/task-form.component';

const routes: Routes = [
  {path: 'app-task-form', component: TaskFormComponent},
  {path: 'app-order-form', component: OrderFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
