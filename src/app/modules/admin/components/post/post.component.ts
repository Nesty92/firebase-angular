import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../../../../services/posts.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public postService: PostsService,
              private firestore: AngularFirestore,
              private fns: AngularFireFunctions) {
  }

  ngOnInit() {
  }


  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.postService.formData = {
      id: null,
      title: '',
      text: '',
      user: '',
    };
  }

  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      const addPost = this.fns.httpsCallable('addPost');
      addPost(data);
    } else {
      const updatePost = this.fns.httpsCallable('updatePost');
      updatePost({id: form.value.id, ...data});
    }
    this.resetForm(form);
  }

}
