import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostsService } from '../shared/services/posts.service';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<any>;
  post: Post;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.post$ = this.route.params
      .pipe(switchMap(params => {
        return this.postsService.getPostById(params['id']);
      }));
    this.post$.subscribe(() => this.isLoading = false);
  }

  backNav() {
    this.router.navigate(['/']);
  }

}
