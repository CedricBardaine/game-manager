import { Component, OnInit } from '@angular/core';
import {GameFilter} from '../game-list-filter/game-list-filter.component' ; 
import { GameCategoryFakeApiServiceService as APIGames } from '../game-category-fake-api-service.service' ;
import { Game , GameFromAPI} from '../GameInterface';
import { Observable } from 'rxjs';
import { games } from './game-data';

import { RouterModule, Routes, Router} from '@angular/router';


import { delay } from "rxjs/operators";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {
  width = 30 ; // rem
  listeJeux: Game[] ; 
  listeJeuxFiltree = this.listeJeux ; 
  
  filterForm: GameFilter ; 
  
  getListeJeux() {
    return this.listeJeux ;
  }
  
  trimDescription(txt , lgth) {
    if (txt.length > lgth) {
      let ret = '' ; 
      ret = txt.substring(0 , lgth) ; 
      ret += "..." ; 
      return ret ; 
    }
    else return txt ; 
  }
  
  
  onClickEvent(action , nomJeu) {
    return alert(action + " a ete effectue sur le jeu "+ nomJeu) ; 
  }
  
  constructor(private gameApi: APIGames, private router: Router ) { }
  
  ngOnInit() {
    this.gameApi.getAll().pipe(delay(2000)).subscribe( 
      games => { 
        this.listeJeux = games ; 
        this.filter(); 
      } ,
      error => console.log(error) 
      ); 
    }
    
    sizeUp() { this.width += 1 ; }
    sizeDown() { this.width -= 1 ; }
    sizeDefault() { this.width = 30 ; }
    
    onFilter(filterForm: GameFilter ) {
      this.filterForm = filterForm ; 
      this.filter() ; 
    }
    
    private filter() {
      if(this.listeJeux) {
        if(this.filterForm) {
          this.listeJeuxFiltree = this.listeJeux
          .filter(
            e => ( !this.filterForm.name.toLowerCase() || e.nom.toLowerCase().includes(this.filterForm.name.toLowerCase()) )
            && ( !this.filterForm.category.toLowerCase() || e.type.toLowerCase().includes (this.filterForm.category.toLowerCase()) )
            && ( !this.filterForm.editor || e.editor.toLowerCase().includes(this.filterForm.editor) ) 
            ) ; 
          }
          else 
          this.listeJeuxFiltree = this.listeJeux ; 
        }  
      }
      

      seeDetails(id:number) {
        console.log(id);
        this.router.navigate(['/product/'+id])
      }
    }
