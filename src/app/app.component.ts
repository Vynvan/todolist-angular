import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterComponent } from '../components/footer/footer.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { TodosService } from './services/todos.service';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [
      CommonModule,
      FooterComponent,
      HttpClientModule,
      NavigationComponent,
      RouterOutlet
   ],
   providers: [
      TodosService
   ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
})
export class AppComponent {
   title = 'todolist-angular';
}
