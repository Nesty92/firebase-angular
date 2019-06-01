import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private userService: UserService, private router: Router) {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credentials) => {
        this.userService.updateCurrentUser(credentials.user);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

  goAdmin() {
    this.router.navigate(['admin']);
  }
}
