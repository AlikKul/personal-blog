import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces';

@Pipe({ name: 'searchPost' })
export class SearchPostPipe implements PipeTransform {
  transform(posts: Post[], searchStr: string) {
    if (searchStr) {
      return posts.filter(post => {
        return post.title.toLowerCase().includes(searchStr.toLowerCase());
      });
    }
    return posts;
  }
}
