import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { RickMortyApiServiceService } from '../../services/rick-morty-api-service.service';
import { Info, Result } from '../../services/rick-morty-api-response';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-display-cards',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginationComponent],
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.scss',
})
export class DisplayCardsComponent {
  charaters: Result[] = [];
  pagination: Info = {} as Info;
  constructor(private service: RickMortyApiServiceService) {}

  ngOnInit() {
    this.service.getData().subscribe((data) => {
      this.charaters = data.results;
      this.pagination = data.info;
    });
  }

  Log(n: number) {
    this.service
      .getCharactersUsingPageNumber(n)
      .subscribe((data) => (this.charaters = data.results));
  }
}
