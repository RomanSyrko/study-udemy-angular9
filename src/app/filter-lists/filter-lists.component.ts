import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string

  [field: string]: string
}

@Component({
  selector: 'app-filter-lists',
  templateUrl: './filter-lists.component.html'
})
export class FilterListsComponent {

  search: any = '';
  searchField: any = 'title';
  toggle: any = true
  // writeTitle: string = 'Write title...'
  // writeText: string = 'Write text...'

  posts: Post[] = [
    {title: 'Beer', text: 'BABAK Brewery'},
    {title: 'Bread', text: 'Brown'},
    {title: 'JavaScript', text: 'Best language in the world'}
  ]
}
