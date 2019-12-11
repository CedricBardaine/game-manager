import { Component, OnInit } from '@angular/core';

export interface Jeu {
  nom: string;
  type: string;
  image: string;
  note: number;
  description: string;
}
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {
  listeJeux: Jeu[] = [
    {nom: 'CallOfDuty' , type: 'fps' , image: 'https://cache.magicmaman.com/data/photo/w1000_ci/4x/enfantavecunearmeplastique.jpg' , note: 2 , description: 'Un jeu de tir.' },
    {nom: 'Trine' , type: 'plateforme' , image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Trine_-_Wizard_Knight_Caverns.jpg' , note: 8 , description: 'Un joli jeu.' },
    {nom: 'Godzilla : Unleashed' , type: 'fps' , image: 'https://images-na.ssl-images-amazon.com/images/I/612zzxPhZKL._SX425_.jpg' , note: 1 , description: '...' },
    {nom: 'Primal Rage' , type: 'combat' , image: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/3/0/8306c1664f_92654_shutterstock-eric-gevaert.jpg' , note: 3 , description: 'Version Game Gear pour ma part. Pire jeu de baston de l univers. Il y a 6 personnages, qui sont en fait des déclinaisons de 3 sprites de célèbres dinosaures (tyrannosaure, tricératops et singe). Ca tourne à deux à l heure. Si je dis pas de connerie ils ont chacun 3 attaques différentes, un truc dans le genre. Ils pourraient en avoir 30, ce serait quand même nul, étant donnée la rigidité du jeu, de toute façon... Mais c est pour dire. ' },

  ]; 
  
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
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
