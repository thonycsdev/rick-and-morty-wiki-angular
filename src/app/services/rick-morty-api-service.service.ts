import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpisodeSchema, Result, RootObject } from './rick-morty-api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyApiServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<RootObject> {
    return this.http.get<RootObject>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getDataByCharacterId(id: number): Observable<Result> {
    return this.http.get<Result>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }

  getEpisodeDataByUrl(url: string): Observable<EpisodeSchema> {
    return this.http.get<EpisodeSchema>(url);
  }
  getCharactersUsingPageNumber(n: number): Observable<RootObject> {
    return this.http.get<RootObject>(
      'https://rickandmortyapi.com/api/character/?page=' + n
    );
  }
}
