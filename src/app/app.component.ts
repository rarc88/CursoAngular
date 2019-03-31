import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
  frameworks:any = [
    { level: 1, active: true, name: 'Angular' },
    { level: 0, active: true, name: 'React' },
    { level: 0, active: true, name: 'Vue' },
    { level: 2, active: false, name: 'Bootstrap' }
  ];
  lat:number = -12.204714;
  lng:number = -77.011926;
}
