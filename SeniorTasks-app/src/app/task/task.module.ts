import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [TaskFormComponent, TaskListComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent
  ]
})
export class TaskModule { }
