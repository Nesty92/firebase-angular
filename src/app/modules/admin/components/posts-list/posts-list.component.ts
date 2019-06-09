import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../models/post';
import { PostsService } from '../../../../services/posts.service';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Array<Post>;

  constructor(private postsService: PostsService,
              private fns: AngularFireFunctions) {
    this.posts = new Array<Post>();
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Post;
      });
    });
  }

  onEdit(post: Post) {
    this.postsService.formData = Object.assign({}, post);
  }

  onDelete(id: String) {
    const callDelete = this.fns.httpsCallable('deletePost');
    return callDelete({id});
  }
}
