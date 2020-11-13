import { Component } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aufgabe4';

  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onSecondPassed(numberSeconds: number) {
    console.log(numberSeconds)
    if (numberSeconds % 2 === 0) {
      this.evenNumbers.push(numberSeconds)
      console.log('pushed in even')
    }
    else {
      this.oddNumbers.push(numberSeconds)
      console.log('pushed in odd')
    }
  }
}
