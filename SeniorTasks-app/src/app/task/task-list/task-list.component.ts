import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[]
  taskSelected: Task
  successString: String;
  errorString: String

  constructor(private service: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.service
      .getTasks()
      .subscribe(resp =>{
        this.taskList = resp
      })
    }

    newRegister(){
      this.router.navigate(["/app-task-form"])
    }

    deleteTask(task: Task){
      this.service
      .deleteTask(task)
      .subscribe(
        resp => {
          this.successString = "Serviço removido com sucesso";
          this.ngOnInit();
        },
        error => this.errorString = "Ocorreu um erro ao remover serviço"
      )
  
    }

}
