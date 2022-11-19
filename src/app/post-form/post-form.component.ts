import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput') inputTitle: ElementRef
  @ViewChild('textInput') inputText: ElementRef

  title: string = ''
  text: string = ''

  addPosts() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Number(Math.floor(Math.random() * 10000000000000) + Number(new Date()))
      }
      this.onAdd.emit(post)
      this.title = this.text = ''
    }
  }

  focusTitle() {
    this.inputTitle.nativeElement.focus()
  }

  focusText() {
    this.inputText.nativeElement.focus()
  }

}
