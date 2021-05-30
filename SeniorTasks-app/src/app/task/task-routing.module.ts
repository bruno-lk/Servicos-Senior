import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {path: 'app-task-form', component: TaskFormComponent},
  {path: 'app-task-form/:id', component: TaskFormComponent},
  {path: 'app-task-list', component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
