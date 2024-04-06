import { Component, Input } from '@angular/core';
import { Result } from '../../services/rick-morty-api-response';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() character: Result = {} as Result;


  see(a: number) {
    console.log(a);
  }
}
