import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ],
  exports: [
    TaskFormComponent
  ]
})
export class TaskModule { }
