import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { RickMortyApiServiceService } from '../../services/rick-morty-api-service.service';
import { Result } from '../../services/rick-morty-api-response';

@Component({
  selector: 'app-display-cards',
  standalone: true,
  imports: [CardComponent, CommonModule, ],
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.scss'
})
export class DisplayCardsComponent {
  charaters: Result[] = [];
  constructor(private service: RickMortyApiServiceService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(data => this.charaters = data.results);
  }
}
