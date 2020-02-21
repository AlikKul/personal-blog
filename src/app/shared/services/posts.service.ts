import { Injectable } from '@angular/core';
import { Post } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {}

  createNewPost(post: Post): Observable<any> {
    return this.http.post(`${environment.dbUrl}/posts.json?auth=${localStorage.getItem('idToken')}`, post);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get(`${environment.dbUrl}/posts.json`)
      .pipe(map((resp: {[key: string]: any}) => {
        return Object
        .keys(resp).map(key => ({
          ...resp[key],
          id: key
        }));
      }));
  }

  getPostById(id: string) {
    return this.http.get(`${environment.dbUrl}/posts/${id}.json`);
  }

  deletePost(id: string) {
    return this.http.delete(`${environment.dbUrl}/posts/${id}.json`);
  }

  editPost(post: Post) {
    return this.http.patch(`${environment.dbUrl}/posts/${post.id}.json`, post);
  }

}
