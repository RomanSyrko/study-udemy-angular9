import {
  Component, ContentChild, ElementRef, EventEmitter, Input, Output
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  constructor() {
  }

  // ngOnInit() {
  //   // console.log(this.infoRef.nativeElement);
  //   console.log('ngOnInit');
  // }
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges:', changes);
  // }
  //
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }
}
