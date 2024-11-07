import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './pages/todolist/todolist.component';

export const routes: Routes = [
   { path: '', component: AppComponent, children: [
      { path: 'Todolist', component: TodolistComponent },
   ]},
];
