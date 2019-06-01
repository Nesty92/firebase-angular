import { FirebaseUserModel } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public afAuth: AngularFireAuth,
    private fns: AngularFireFunctions,
    private router: Router
  ) {
  }

  updateCurrentUser(fuser: firebase.User) {
    const callable = this.fns.httpsCallable('updateUser');
    const user = new FirebaseUserModel(fuser);
    return callable(user);
  }
}
