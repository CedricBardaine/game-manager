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
    return this.clickEvent.emit("Follow") ; 
  }
  onClickShare():void {
    return this.clickEvent.emit("Share") ; 
  }
  onClickBuy():void {
    return this.clickEvent.emit("Buy") ; 
  }


}
