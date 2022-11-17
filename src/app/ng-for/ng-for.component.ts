import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  arr = [1, 1, 2, 3, 5, 8, 13]

  obj = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      address: [
        {street: "Kulas Light"},
        {zipcode: "92998-3874"},
      ]
    },
    {
      id: 1,
      name: "Ervin Howell",
      username: "Antonette",
      address: [
        {street: "Victor Plains"},
        {zipcode: "90566-7771"},
      ]
    },
  ]

}
