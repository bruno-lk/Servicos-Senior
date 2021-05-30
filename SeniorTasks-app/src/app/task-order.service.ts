import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskOrder } from './task-order/taskOrder';

@Injectable({
  providedIn: 'root'
})
export class TaskOrderService {
  apiURL: string = 'http://localhost:8080/api/order'

  constructor( private http: HttpClient ) { }

  save(order: TaskOrder): Observable<TaskOrder> {
    return this.http.post<TaskOrder>(this.apiURL, order);
  }

  getOrders(): Observable<TaskOrder[]> {
    return this.http.get<TaskOrder[]>(this.apiURL);
  }
  
  getOrdersById(id: number): Observable<TaskOrder> {
    return this.http.get<TaskOrder>(`${this.apiURL}/${id}`);
  }

  updateOrder(order: TaskOrder): Observable<any> {
    return this.http.put<TaskOrder>(`${this.apiURL}/${order.id}`, order);
  }

  deleteOrder(order: TaskOrder): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${order.id}`);
  }
}
