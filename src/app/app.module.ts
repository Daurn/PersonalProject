import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoService} from "./services/todo.service";
import {HttpRequestService} from "./services/httpRequest.service";
import { TaskComponent } from './todo/task/task.component';
import { HttprequestComponent } from './httprequest/httprequest.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent,
    HttprequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [
    TodoService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
