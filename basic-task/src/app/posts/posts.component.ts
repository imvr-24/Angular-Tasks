import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostModel } from '../models/posts.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostModel[] = [];
  name =  'veera';
  showSpinner = true;

  constructor( private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(post => {
        this.showSpinner = false;
        return this.posts = post;
      });
  }

  navigateToTodos() {
    console.log(this.posts);
    console.log(this.posts.length);
    this.router.navigate(['/todos']);
  }
}
