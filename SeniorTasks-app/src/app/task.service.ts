import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL: string = 'http://localhost:8080/api/task'

  constructor( private http: HttpClient ) {}

  save(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }
  
  getTasksById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiURL}/${id}`);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put<Task>(`${this.apiURL}/${task.id}`, task);
  }

  deleteTask(task: Task): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${task.id}`);
  }
}
