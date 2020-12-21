import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoWrapperComponent } from "./components/todo-wrapper/todo-wrapper.component";

@NgModule({
  declarations: [AppComponent, TodoWrapperComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ng generate component <component-name>
// ng g c <component-name>
