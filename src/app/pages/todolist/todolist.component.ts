import { Component, Signal } from '@angular/core';
import { Todo } from '../../services/model';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-todolist',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './todolist.component.html',
   styleUrl: './todolist.component.css',
})
export class TodolistComponent {
   items: Signal<Todo[]>;

   constructor(private todos: TodosService) {
      this.items = todos.get();
   }

   addTodo() {}

   trackById(index: number, item: Todo): number {
      return item.id;
    }
}
