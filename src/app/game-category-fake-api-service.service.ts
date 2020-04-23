import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { games } from "./game-list/game-data"
import { Game , GameFromAPI } from './GameInterface';


@Injectable({
  providedIn: 'root'
})
export class GameCategoryFakeApiServiceService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Game[]> {
    //  setTimeout( () => {return of(games)} , 2500  )   ; 
    // return of(games); 

    while ( games.length != 0 ) games.shift() ; 
    return of(this.fetchFromAPI()); 
  }

  fetchFromAPI():Game[] {
    fetch('http://localhost:3000/games')
    .then(r => r.json())
    .then(r => {
      let gamesFromAPI:GameFromAPI[] = r ; 

      var gameRet:Game[] ; 
      gamesFromAPI.forEach(e => {
        // console.log(e.title);
        let gameToAdd:Game = {} ;
        gameToAdd.nom = "";
        gameToAdd.type = "" ; 
        gameToAdd.image = "" ; 
        gameToAdd.description = "" ; 
        gameToAdd.editor = "" ;

        gameToAdd.nom = e.title ; 
        gameToAdd.type = e.genres.toString() ; 
        gameToAdd.image = e.coverImage ; 
        gameToAdd.description = e.description ; 
        gameToAdd.editor = e.developer.toString() ;

        console.log(gameToAdd.nom);
        games.push(gameToAdd);
      });
    })
    return games ; 
    }

  private delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
