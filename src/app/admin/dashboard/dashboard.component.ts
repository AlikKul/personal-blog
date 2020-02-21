import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts$: Observable<Post[]>;
  isLoading = false;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.isLoading = true;

    this.route.queryParams.subscribe((params) => {
      if (params['postEdited']) {
        this.notificationService.showNotification('Post updated');
      }
    });

    this.posts$ = this.postsService.getAllPosts();
    this.posts$.subscribe(() => {
      this.isLoading = false;
    });
  }

  deletePost(id: string) {
    this.isLoading = true;
    this.postsService.deletePost(id).subscribe();
    this.posts$ = this.postsService.getAllPosts();
    this.posts$.subscribe(() => {
      this.isLoading = false;
    });
    this.notificationService.showNotification('Post deleted');
  }

  navEdit(id: string) {
    this.router.navigate(['admin', 'edit', id]);
  }

}
