import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: any[];
  inputData: any;

  constructor(private todoService: TodoService) {
    this.todo = [];
  }

  ngOnInit(): void {
    this.todo = this.todoService.todo;
  }

  add() {
    this.todoService.addOne(this.inputData);
    this.inputData = "";
  }

  delete(index: number) {
    this.todoService.deleteOne(index);
  }

  deleteAll(){
    this.todoService.deleteAll();
  }
}
