import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rick-morty-api-angular';
}
