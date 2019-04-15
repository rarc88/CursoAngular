import { Component, OnInit } from '@angular/core';
import { AuthoriationService } from '../services/authoriation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authorization: AuthoriationService) { }

  ngOnInit() { }

  signin() {
    this.authorization.signin(this.email, this.password);
  }

}
