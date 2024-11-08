import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { Todo } from '../../services/model';
import { TodosService } from '../../services/todos.service';

@Component({
   selector: 'app-todolist',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './todolist.component.html',
   styleUrl: './todolist.component.css',
})
export class TodolistComponent {

   editing = false;
   items: Signal<Todo[]>;


   constructor(private todoservice: TodosService) {
      this.items = todoservice.todos;
   }


   addTodo(text: string) {
      this.todoservice.create(text);
   }

   updateTodo(item: Todo) {
      this.todoservice.update(item);
   }

   trackById(index: number, item: Todo): number {
      return item.id;
    }
}
