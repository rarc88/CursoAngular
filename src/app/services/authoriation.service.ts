import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthoriationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  public signin(email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      })
  }

  public signup() {
    console.log('Signup');
  }

}
