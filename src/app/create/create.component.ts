import { Component, OnInit } from '@angular/core';
import { FrameworksService } from '../services/frameworks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id:number = null;
  framework:any = { active: true };

  constructor(private route: ActivatedRoute, private frameworkService: FrameworksService) {
    //let action = this.route.snapshot.queryParams['action'] || null;
    this.id = this.id = this.route.snapshot.params['id'] || null;
    if(this.id) {
      frameworkService.getFramework(this.id)
        .valueChanges()
        .subscribe(framework => {
          this.framework = framework;
        });
    }
  }

  ngOnInit() {}

  createFramework() {
    if(!this.id) {
      this.framework.id = Date.now();
    }
    this.frameworkService.createFramework(this.framework);
    this.framework = { active: true };
  }

}
