import {Component, OnInit} from '@angular/core';
import {ITodo, TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular HttpClient';

  todos: ITodo[] = []
  loading: boolean = false
  todoTitle: string = ''
  error: string = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return console.log("Can't be empty")
    }
    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
      id: 1
    }).subscribe(todo => {
      this.todos.push(todo)
      this.todoTitle = ''
    })
  }

  fetchTodos() {
    this.loading = true
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => { // Другий параметр - Вивід помилки
        this.error = error.message
      })
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(value => value.id !== id)
      })
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        this.todos.find(value => value.id === todo.id)!.completed = true // Без знаку ! не хочу працювати
      })
  }
}
