import { UserService } from './../../services/user.service';
import { AuthGuard } from './../../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private userService: UserService) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((crendentials) => {
          this.userService.updateCurrentUser(crendentials.user);
      });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
