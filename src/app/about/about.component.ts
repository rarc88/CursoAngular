import { Component, OnInit } from '@angular/core';
import { FrameworksService } from '../services/frameworks.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = 'Curso de Angular';
  frameworks:any = null;

  constructor(private frameworksService: FrameworksService) {
    frameworksService.getFrameworks()
      //.valueChanges()
      .subscribe(frameworks => {
        this.frameworks = Object.keys(frameworks).map((key) => {
          return {...frameworks[key], key: key};
        })
        //this.frameworks = Object.values(frameworks);
        //this.frameworks = frameworks;
      }, error => {
        alert(`Error: ${error.status}`)
      });
  }

  ngOnInit() { }

}
