import { Component, Input, OnInit } from '@angular/core';
import { RickMortyApiServiceService } from '../../services/rick-morty-api-service.service';
import { EpisodeSchema, Result } from '../../services/rick-morty-api-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @Input() characterId: string = '';
  public character: Result = {} as Result;
  public episodes: EpisodeSchema[] = [];
  constructor(private service: RickMortyApiServiceService) {}

  ngOnInit() {
    this.service.getDataByCharacterId(+this.characterId).subscribe((x) => {
      this.character = x;
      x.episode.forEach((url) => {
        this.service
          .getEpisodeDataByUrl(url)
          .subscribe((x) => this.episodes.push(x));
      });
    });
  }
}
