import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  exports: [
    TaskFormComponent
  ]
})
export class TaskModule { }
