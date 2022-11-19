import {Component} from '@angular/core';


export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Components in Details';

  posts: Post[] = [
    {title: 'Angular components', text: 'continue', id: 1},
    {title: 'Angular binding', text: 'need to know', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('ID to remove', id);
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
