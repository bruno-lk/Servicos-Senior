import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task

  constructor() {
    this.task = new Task()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.task)
  }

  returnToList() {
    console.log("Ainda vai voltar")
  }

}
