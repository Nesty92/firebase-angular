import * as firebase from 'firebase';

export class FirebaseUserModel {
  image: String;
  displayName: String;
  uid: String;

  constructor(user: firebase.User) {
    this.image = user.photoURL;
    this.displayName = user.displayName;
    this.uid = user.uid;
  }
}
