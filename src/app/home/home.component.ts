import {Component} from '@angular/core'
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /// В конструктор імпортувати Router.
  constructor(private router: Router) {
  }

  /// І тепер методом .navigate і в ньому через масив додати абсолютний шлях шляху.
  goToPostsPage() {
    this.router.navigate(['/posts'])
  }
}
