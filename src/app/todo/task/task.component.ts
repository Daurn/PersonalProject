import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() content: string;
  @Input() taskIndex: number;

  @Output() deleteOutput = new EventEmitter<number>();

  constructor() {
    this.content = '';
    this.taskIndex = 0;
  }

  ngOnInit(): void {
  }

  delete(){
    this.deleteOutput.emit(this.taskIndex);
  }
}
