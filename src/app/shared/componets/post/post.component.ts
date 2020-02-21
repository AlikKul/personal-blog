import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  showPost() {
    this.router.navigate(['/post', this.post.id]);
  }

}
