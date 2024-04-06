import { Component, Input } from '@angular/core';
import { Result } from '../../services/rick-morty-api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() character: Result = {} as Result;

  constructor(private route: Router) { };

  see(a: number) {
   this.route.navigate(['details/', a])
  }
}
