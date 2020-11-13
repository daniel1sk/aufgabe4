import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public count: number = 0;

  @Output('secondPassed') timerStarted = new EventEmitter<{counter: number}>();

  interval;
  seconds: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(event: any) {
    console.log('game started');
    this.interval =  setInterval(() => {
      this.timerStarted.emit({counter: this.seconds})
      this.seconds++;
      // console.log(this.seconds)
    }, 1000); 
  }

  onGameEnd() {
    clearInterval(this.interval)
  }

}
