import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: Post[];
  isLoading = false;
  searchStr = '';

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  }

}
