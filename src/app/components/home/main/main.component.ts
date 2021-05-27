import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  todosList: Todo[];
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todosList = [];
    } else {
      this.todosList = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  findIndexOf(a: any, b: any) {
    let Index = -1;
    a.forEach((e: any, index: any) => {
      if (e.id === b.id) {
        Index = index;
      }
    });
    return Index;
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    let Index = this.findIndexOf(this.todosList, todo);
    this.todosList.splice(Index, 1);
    console.log(todo);

    localStorage.setItem('todos', JSON.stringify(this.todosList));
  }

  activeTodo(todo: Todo) {
    let Index = this.findIndexOf(this.todosList, todo);
    this.todosList[Index].active = !this.todosList[Index].active;
    console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todosList));
  }
  onAddTodo(e: any): void {
    e.preventDefault();
    let length = this.todosList.length;
    console.log('TODO LENGTH ', length);
    let lastElement: any = 0;
    if (length !== 0) {
      lastElement = this.todosList[length - 1].id;
      console.log(lastElement);
    }

    let AddTodo = {
      id: parseInt(lastElement) + 1,
      value: e.target[0].value,
      active: true,
    };
    if (e.target[0].value !== '') {
      this.todosList.push(AddTodo);
      localStorage.setItem('todos', JSON.stringify(this.todosList));
    }
    e.target[0].value = '';
  }
}
