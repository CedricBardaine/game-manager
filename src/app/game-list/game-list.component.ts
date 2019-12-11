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
    {
      nom: 'CallOfDuty' ,
      type: 'fps' ,
      image: 'https://store-images.s-microsoft.com/image/apps.6548.64573185977183565.5d654c65-6a44-48df-aabb-f37569ffa45b.064ec65e-bd1a-4c80-80c0-8d3c83497327?mode=scale&q=90&h=1080&w=1920&format=jpg' ,
      note: 2 ,
      description: 'Un jeu de tir.' 
    },
    {
      nom: 'Trine' ,
      type: 'plateforme' ,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Trine_-_Wizard_Knight_Caverns.jpg' ,
      note: 8 ,
      description: 'Un joli jeu.' 
    },
    {
      nom: 'Godzilla : Unleashed' ,
      type: 'fps' ,
      image: 'https://i.ytimg.com/vi/3t0bqCus3VM/maxresdefault.jpg' ,
      note: 1 ,
      description: 'Not good.' 
    },
    {
      nom: 'Primal Rage' ,
      type: 'combat' ,
      image: 'https://s1.dmcdn.net/HLLxf/x720-2dv.jpg' ,
       note: 3 ,
       description: 'Version Game Gear pour ma part. Pire jeu de baston de l univers. Il y a 6 personnages, qui sont en fait des déclinaisons de 3 sprites de célèbres dinosaures (tyrannosaure, tricératops et singe). Ca tourne à deux à l heure. Si je dis pas de connerie ils ont chacun 3 attaques différentes, un truc dans le genre. Ils pourraient en avoir 30, ce serait quand même nul, étant donnée la rigidité du jeu, de toute façon... Mais c est pour dire. ' 
      },

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
