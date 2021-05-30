import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskOrderRoutingModule } from './task-order-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [OrderFormComponent, OrderListComponent],
  imports: [
    CommonModule,
    TaskOrderRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [OrderFormComponent, OrderListComponent]
})
export class TaskOrderModule { }
