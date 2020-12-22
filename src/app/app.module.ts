import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoWrapperComponent } from "./components/todo-wrapper/todo-wrapper.component";
import { InputComponent } from "./components/input/input.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoWrapperComponent,
    InputComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
