import { FirebaseUserModel } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
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


  getCurrentUser() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          const callable = this.fns.httpsCallable('getUser');
          return callable({ uid: user.uid });
        } else {
          return of(null);
        }
      })
    );
  }

  updateCurrentUser(fuser: firebase.User) {
    const callable = this.fns.httpsCallable('updateUser');
    const user = new FirebaseUserModel(fuser);
    // console.log(user, fuser);
    // return of(null);
    return callable(user);
  }
}
