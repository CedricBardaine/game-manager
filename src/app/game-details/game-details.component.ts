import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Game, GameFromAPI } from '../GameInterface';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  theIdProduct: number;
  theGame: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let theParameter = params.get('id') ; 
      this.theIdProduct =  +theParameter ; 
      // console.log(this.theIdProduct);

      this.theGame = this.fetchTheGameFromAPI(this.theIdProduct);
    });
  }

  fetchTheGameFromAPI(lid: number):Game {
    var gameRet:Game = {
      id: null,
      nom: null,
      type: null,
      image: null,
      note: null,
      description: null,
      editor: null 
    };
    
    fetch('http://localhost:3000/games')
    .then(r => r.json())
    .then(r => {
      let gamesFromAPI:GameFromAPI[] = r ; 
      
      gamesFromAPI.forEach(e => {
        if(e.id == lid) {
          console.log(e.title);
          gameRet.nom = e.title ; 
          gameRet.description = e.description ; 
          gameRet.image = e.coverImage ; 
        } 
      });
    })
    return gameRet  ; 
  }
}
