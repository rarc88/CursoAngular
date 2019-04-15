import { Component, OnInit } from '@angular/core';
import { AuthoriationService } from '../services/authoriation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authorization: AuthoriationService) {
    authorization.signup();
  }

  ngOnInit() {
  }

}
