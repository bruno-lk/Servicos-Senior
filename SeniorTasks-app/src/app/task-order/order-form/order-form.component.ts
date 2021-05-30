import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task/task';
import { TaskOrder } from 'src/app/task-order/taskOrder'
import { Router } from '@angular/router';
import { TaskOrderService } from 'src/app/task-order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order : TaskOrder
  taskList : Task[] = []
  success : boolean = false;
  errors : string[];

  constructor(
    private taskService : TaskService,
    private orderService : TaskOrderService,
    private router: Router
  ) {
    this.order = new TaskOrder()
   }

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe(resp => this.taskList = resp)
  }

  onSubmit(){
    this.orderService
      .save(this.order)
      .subscribe(
        resp => {
          this.success = true
          this.errors = null
          this.order = resp
          console.log(resp)
        },
        errorResponse =>{
          this.success = false
          this.errors = errorResponse.error.errors
        }
      )
  }

  returnToList() {
    this.router.navigate(['/app-order-list']);
  }

}
