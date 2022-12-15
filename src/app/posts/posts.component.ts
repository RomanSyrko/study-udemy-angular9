import {Component, OnInit} from '@angular/core';
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-posts',
  template: 'PostsComponent'
})
export class PostsComponent implements OnInit {
  posts = []
  message: string

  constructor(private service: PostsService) {

  }

  ngOnInit(): void {
    this.service.fetch().subscribe(p => {
      // @ts-ignore
      this.posts = p
    })
  }

  add(title: string) {
    const post = {title}
    this.service.create(post).subscribe((p) => {
      // @ts-ignore
      this.posts.push(p)
    }, error => this.message = error)
  }

  // @ts-ignore
  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe()
    }
  }

}
