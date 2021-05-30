import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task
  success: boolean = false;
  errors: string[];
  id: number

  constructor(
    private service: TaskService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.task = new Task()
  }

  ngOnInit(): void {
    const params: Observable<Params> = this.activatedRouter.params;

    params.subscribe((urlParams) => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service.getTasksById(this.id).subscribe(
          response => {
            this.task = response;
          },
          errorResponse => {
            this.task = new Task();
          }
        );
      }
      
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.updateTask(this.task).subscribe(
        response => {
          (this.success = true), (this.errors = null);
        },
        errorResponse => {
          this.errors = ['Erro ao atualizar Serviço'];
        }
      );
    } else {
      this.service
      .save(this.task)
      .subscribe(
        resp => {
          this.success = true
          this.errors = null
          this.task = resp
          console.log(resp)
        },
        errorResponse =>{
          this.success = false
          this.errors = errorResponse.error.errors
        }
      )
    }
    
  }

  returnToList() {
    this.router.navigate(['/app-task-list']);
  }

}
