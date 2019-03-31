import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Curso Angular';
  active = false;
  name:string = '';
  lastName:string = '';

  constructor() {
    setTimeout(() => {
      this.active = true;
    }, 3000);
  }

  onClick() {
    alert('Has hecho click!');
  }
}