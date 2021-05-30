import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { TaskModule } from './task/task.module';
import { TemplateModule } from './template/template.module';
import { TaskOrderModule } from './task-order/task-order.module';
import { TaskOrderService } from './task-order.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    TaskModule,
    TaskOrderModule,
    HttpClientModule
  ],
  providers: [
    TaskService,
    TaskOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
