import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
   nomJeu: string; 
 
   @Output() clickEvent = new EventEmitter<string>() ; 

   
  onClickFollow():void {
    return this.clickEvent.emit(Action.FOLLOW) ; 
  }
  onClickShare():void {
    return this.clickEvent.emit(Action.SHARE) ; 
  }
  onClickBuy():void {
    return this.clickEvent.emit(Action.BUY) ; 
  }

}
enum Action {
  FOLLOW = "Follow",
  SHARE = "Share",
  BUY = "Buy",
}