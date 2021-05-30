import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskOrderService } from 'src/app/task-order.service';
import { TaskOrder } from '../taskOrder';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: TaskOrder[]
  orderSelected: TaskOrder
  successString: String
  errorString: String

  constructor(
    private orderService : TaskOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderService
      .getOrders()
      .subscribe(resp =>{
        this.orderList = resp
      })
  }

  newRegister(){
    this.router.navigate(["/app-order-form"])
  }

  deleteOrder(order: TaskOrder){
    this.orderService
    .deleteOrder(order)
    .subscribe(
      resp => {
        this.successString = "Pedido de serviço removido com sucesso";
        this.ngOnInit();
      },
      error => this.errorString = "Ocorreu um erro ao remover pedido de serviço"
    )
  }

}
