import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { games } from "./game-list/game-data"
import { Game } from './GameInterface';


@Injectable({
  providedIn: 'root'
})
export class GameCategoryFakeApiServiceService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Game[]> {
    //  setTimeout( () => {return of(games)} , 2500  )   ; 
    return of(games); 
  }


  private delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
