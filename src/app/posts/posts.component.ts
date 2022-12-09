import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  showIDs: boolean = false

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('queryParams:', params)
      this.showIDs = !!params['showIDs'] /// !! - конвертація в boolean значення
    })
    this.route.fragment.subscribe(fragment => {
      console.log('Fragment:', fragment);
    })
  }

  showIDsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIDs: true
      },
      fragment: 'ProgramFragment'
    })
  }
}
