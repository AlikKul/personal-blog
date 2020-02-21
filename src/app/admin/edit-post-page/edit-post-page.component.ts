import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
  styleUrls: ['./edit-post-page.component.scss']
})
export class EditPostPageComponent implements OnInit {

  form: FormGroup;
  post: Post;
  postId = '';
  postDate = '';
  isLoading = false;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.form = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
      image: new FormControl('')
    });

    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.postsService.getPostById(this.postId).subscribe((response: Post) => {
      this.form.get('title').setValue(response.title);
      this.form.get('text').setValue(response.text);
      this.form.get('image').setValue(response.image);
      this.postDate = response.date;
      this.isLoading = false;
      });
  }

  submit() {
    this.post = {
      title: this.form.get('title').value,
      text: this.form.get('text').value,
      date: this.postDate,
      image: this.form.get('image').value,
      id: this.postId
    };
    this.postsService.editPost(this.post).subscribe(() => {});
    this.router.navigate(['admin', 'dashboard'], {
      queryParams: { postEdited: 'true'}
    });
  }

  cancel() {
    this.router.navigate(['admin', 'dashboard']);
  }

}
