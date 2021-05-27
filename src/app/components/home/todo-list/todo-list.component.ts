import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../main/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoActive: EventEmitter<Todo> = new EventEmitter();
  myTodo: any;
  constructor() {
    this.todo = this.myTodo;
  }

  ngOnInit(): void {
    console.log(this.myTodo);
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }
  onCompleteToggle(todo: Todo) {
    this.todoActive.emit(todo);
  }
}
