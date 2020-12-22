import { Component, Input, Output, EventEmitter } from "@angular/core";

import type { Todo } from "../../types/TodoTypes";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Input() todoIndex: number = 0;
  @Input() isEven: boolean = false;

  @Output() onChangeStatus = new EventEmitter<string>();
  @Output() onEditTodo = new EventEmitter<string>();
  @Output() onRemoveTodo = new EventEmitter<string>();

  constructor() {}

  changeStatus() {
    this.onChangeStatus.emit(this.todo?.id);
  }

  editTodo() {
    this.onEditTodo.emit(this.todo?.id);
  }

  removeTodo() {
    this.onRemoveTodo.emit(this.todo?.id);
  }
}
