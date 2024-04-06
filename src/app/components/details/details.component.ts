import { Component, Input, OnInit } from '@angular/core';
import { RickMortyApiServiceService } from '../../services/rick-morty-api-service.service';
import { Result } from '../../services/rick-morty-api-response';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  @Input() characterId: string = "";
  public character: Result = {} as Result;
  constructor(private service: RickMortyApiServiceService) {

  }

  ngOnInit() {
    this.service.getDataByCharacterId(+this.characterId).subscribe(x => this.character = x);
  }

}
