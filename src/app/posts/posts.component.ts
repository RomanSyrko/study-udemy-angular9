import {Component} from '@angular/core'
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(public postsService: PostsService) {}
}
