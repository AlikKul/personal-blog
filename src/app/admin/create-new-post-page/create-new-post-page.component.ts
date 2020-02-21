import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/services/posts.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-create-new-post-page',
  templateUrl: './create-new-post-page.component.html',
  styleUrls: ['./create-new-post-page.component.scss']
})
export class CreateNewPostPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('')
    });

  }

  submit() {
    if (this.authService.isLogedIn()) {
      const post: Post = {
        title: this.form.value.title,
        text: this.form.value.text,
        image: this.form.value.image,
        date: String(new Date())
      };
      this.postsService.createNewPost(post).subscribe(() => {});
      this.form.reset();
      this.notificationService.showNotification('Post succesfully added');
    } else {
      this.router.navigate(['/admin', 'login'], { queryParams: {sessionExpired: 'true'} });
    }
  }

}
