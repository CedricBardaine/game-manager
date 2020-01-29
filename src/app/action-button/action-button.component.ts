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
   action: string; 
  @Input()
   nomJeu: string; 

   @Output() clickFromButton = new EventEmitter<void>();  

  onClickActionButon():void {
    return this.clickFromButton.emit(); 
  }


}
