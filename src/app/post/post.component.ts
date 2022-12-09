import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IPost, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
/// Читання параметрів з адресної стрічки.

  post?: IPost  /// ? - щоб не було помилки TS2322 в this.post

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postsService.getById(+params['id']) /// Плюсик + переводить String to Number
    })
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
