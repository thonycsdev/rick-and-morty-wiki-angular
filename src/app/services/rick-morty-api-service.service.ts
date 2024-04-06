import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from './rick-morty-api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<RootObject> {
    return this.http.get<RootObject>("https://rickandmortyapi.com/api/character");
  }


}
