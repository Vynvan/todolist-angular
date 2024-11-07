import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [
      CommonModule,
      FooterComponent,
      NavigationComponent,
      RouterOutlet
   ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
})
export class AppComponent {
   title = 'todolist-angular';
}
