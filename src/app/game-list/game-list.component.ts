import { Component, OnInit } from '@angular/core';
import {GameFilter} from '../game-list-filter/game-list-filter.component'

export interface Jeu {
  nom: string;
  type: string;
  image: string;
  note: number;
  description: string;
  editor: string;
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
  width = 30 ; // rem
  listeJeux: Jeu[] = [
    {
      nom: 'CallOfDuty' ,
      type: 'fps' ,
      image: 'https://store-images.s-microsoft.com/image/apps.6548.64573185977183565.5d654c65-6a44-48df-aabb-f37569ffa45b.064ec65e-bd1a-4c80-80c0-8d3c83497327?mode=scale&q=90&h=1080&w=1920&format=jpg' ,
      note: 2 ,
      description: 'Un jeu de tir.' ,
      editor: 'Activision'
    },
    {
      nom: 'Trine' ,
      type: 'plateforme' ,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Trine_-_Wizard_Knight_Caverns.jpg' ,
      note: 8 ,
      description: 'Un joli jeu.' ,
      editor: 'Frozenbyte'
    },
    {
      nom: 'Godzilla : Unleashed' ,
      type: 'fps' ,
      image: 'https://i.ytimg.com/vi/3t0bqCus3VM/maxresdefault.jpg' ,
      note: 1 ,
      description: 'Not good.' ,
      editor: 'Atari Inc.'
    },
    {
      nom: 'Primal Rage' ,
      type: 'combat' ,
      image: 'https://s1.dmcdn.net/HLLxf/x720-2dv.jpg' ,
       note: 3 ,
       description: 'Version Game Gear pour ma part. Pire jeu de baston de l univers. Il y a 6 personnages, qui sont en fait des déclinaisons de 3 sprites de célèbres dinosaures (tyrannosaure, tricératops et singe). Ca tourne à deux à l heure. Si je dis pas de connerie ils ont chacun 3 attaques différentes, un truc dans le genre. Ils pourraient en avoir 30, ce serait quand même nul, étant donnée la rigidité du jeu, de toute façon... Mais c est pour dire. ' ,
       editor: 'Atari Games'
      },
    {
      nom: 'Half-Life' ,
      type: 'fps' ,
      image: 'https://www.numerama.com/content/uploads/2017/07/img_0034.jpg' ,
       note: 9 ,
       description: "Half-Life relate les aventures de Gordon Freeman, chercheur au Laboratoire des matériaux anormaux du centre de recherche de Black Mesa, un gigantesque complexe scientifique top secret installé dans une base militaire désaffectée totalement enterrée sous la surface. Alors qu'il participait à une expérience sur un mystérieux échantillon de cristal, Freeman ouvre involontairement une brèche interdimensionnelle vers un monde parallèle, Xen, peuplé de créatures extraterrestres. Des aliens d'espèces et de races diverses font irruption un peu partout dans le centre et attaquent sauvagement son personnel. La salle de test est partiellement détruite par la résonance en chaîne, mais Freeman, équipé d'une combinaison de protection en milieu hostile (HEV), parvient à en sortir indemne après avoir été pris dans une tempête de portails. Après s'être remis d'un court évanouissement, il prend conscience de la catastrophe… " ,
       editor: 'Sierra'
      },

    ]; 

    listeJeuxFiltree = this.listeJeux ; 
    
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

    constructor() { }
    
    ngOnInit() {
    }

    sizeUp() { this.width += 1 ; }
    
    sizeDown() { this.width -= 1 ; }

    onFilter(filterForm: GameFilter ) {
      this.listeJeuxFiltree = this.listeJeux
      .filter(
        e => ( !filterForm.name || e.nom.toLowerCase().includes(filterForm.name) )
        && ( !filterForm.category || e.type === filterForm.category )
        && ( !filterForm.editor || e.editor.toLowerCase().includes(filterForm.editor) ) 
      ) ; 
    }
    
  }
