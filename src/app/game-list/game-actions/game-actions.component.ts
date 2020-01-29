import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.css']
})
export class GameActionsComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
  @Output() private readonly follow = new EventEmitter<void>() ; 
  @Output() private readonly share = new EventEmitter<void>() ; 
  @Output() private readonly achat = new EventEmitter<void>() ; 
  
  onFollow(event: MouseEvent) {
    event.preventDefault() ; 
    this.follow.emit() ; 
  }
  onShare(event: MouseEvent) {
    event.preventDefault() ; 
    this.share.emit() ; 
  }
  onBuy(event: MouseEvent) {
    event.preventDefault() ; 
    this.achat.emit() ; 
  }
  
  
}
