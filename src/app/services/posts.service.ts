import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  formData: Post;

  constructor(private firestore: AngularFirestore) {
    this.formData = {
      id: '',
      user: '',
      title: '',
      text: ''
    };
  }

  getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }
}
