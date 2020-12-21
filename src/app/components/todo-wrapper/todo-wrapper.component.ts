import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

import type { Todo as TodoType } from "../../types/TodoTypes";

@Component({
  selector: "app-todo-wrapper",
  templateUrl: "./todo-wrapper.component.html",
  styleUrls: ["./todo-wrapper.component.scss"],
})
export class TodoWrapperComponent {
  todoText: FormControl = new FormControl("make tea");

  todos: TodoType[] = [];

  edit: string = "";

  constructor() {}

  createTodo() {
    const label = this.todoText.value;

    if (label) {
      if (this.edit) {
        const todos = [...this.todos];

        todos.map((todo) => {
          if (todo.id === this.edit) {
            todo.label = label;
          }
        });

        this.todos = todos;
        this.edit = "";
      } else {
        const status = "InComplete";
        const id = String(Date.now());

        this.todos.push({ label, id, status });
      }

      this.todoText.reset();
    }
  }

  changeStatus(id: string) {
    const todos = [...this.todos];

    todos.map((todo) => {
      if (todo.id === id) {
        todo.status = todo.status === "InComplete" ? "Complete" : "InComplete";
      }
    });

    this.todos = todos;
  }

  removeTodo(id: string) {
    const todos = [...this.todos];

    this.todos = todos.filter((todo) => todo.id !== id);
  }

  editTodo(id: string) {
    const todo: TodoType | undefined = this.todos.find((t) => t.id === id);

    if (todo) {
      this.edit = id;
      this.todoText.setValue(todo.label);
    }
  }
}
