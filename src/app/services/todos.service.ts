import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoChanges } from './model';
import { tap } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class TodosService {

   private apiUrl = 'http://profile-api.moduldwg.mshome.net/todos';
   private _todos = signal<Todo[]>([]);


   get todos() {
      return this._todos;
   }


   constructor(private http: HttpClient) {
      this.loadTodos();
   }


   create(text: string): void {
      this.http.post<Todo>(this.apiUrl, { text }).pipe(
         tap(newTodo => {
            newTodo.text = text;
            const currentTodos = this._todos();
            this._todos.set([...currentTodos, newTodo]);
         })
      ).subscribe();
   }

   delete(id: number): void {
      this.http.delete(`${this.apiUrl}/${id}`).pipe(
      ).subscribe();
   }

   update(todo: TodoChanges): void {
      const item = this._todos().find(el => el.id === todo.id);
      if (item) item.done = !item?.done;
      this.http.put<Todo>(`${this.apiUrl}`, todo).pipe(
      ).subscribe();
   }


   private loadTodos(): void {
      this.http.get<Todo[]>(this.apiUrl).pipe(
         tap(todos => this._todos.set(todos))
      ).subscribe();
   }
}
