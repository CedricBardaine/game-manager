import { Component, OnInit, Output , EventEmitter} from '@angular/core';

export interface GameFilter {
  name: string;
  category: string; 
  editor: string;
}

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  
  
  typesJeu = ["rpg", "platformer", "fps", "combat" ] ; 
  
  form: GameFilter = {name: '' , category: '' , editor: ''} ;
  
  @Output() filter = new EventEmitter<GameFilter>()
  
  
  onChange(field: string , value: string) {
    value = value.trim().toLowerCase() ; 
    this.form[field] = value ; 
  }
  
  onSubmit(event: any) {
    event.preventDefault() ; 
    this.filter.emit(this.form) ;
  }

  onReset() {
    this.form = {name: '' , category: '' , editor: ''} ; 
    this.filter.emit(this.form) ; 
  }
  
}
