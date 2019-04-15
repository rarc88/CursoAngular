import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrameworksService } from '../services/frameworks.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:number = null;
  framework:any = {};

  constructor(private route: ActivatedRoute, private frameworkService: FrameworksService) {
    this.id = this.route.snapshot.params['id'];
    frameworkService.getFramework(this.id)
      //.valueChanges()
      .subscribe(framework => {
        this.framework = framework;
      });
  }

  ngOnInit() {}

}
