import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngfor';
  numbers =[1,2,3,4,5,6];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2,4,6]
  onlyOdd = false;
  
}
