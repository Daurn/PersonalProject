import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {HttprequestComponent} from "./httprequest/httprequest.component";

const routes: Routes = [
  {
    path:'',
    component: TodoComponent
  },
  {
    path:'todo',
    component: TodoComponent
  },
  {
    path:'httpRequest',
    component: HttprequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
