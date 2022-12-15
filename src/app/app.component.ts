import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /// Варіант №1
  // modal = false

  /// Варіант №2
  @ViewChild(RefDirective) refDir: RefDirective

  constructor(
    private resolver: ComponentFactoryResolver,
    /// Доступ до назви вкладки у браузері
    private title: Title,
    /// Мета теги
    private meta: Meta
  ) {
    const t = title.getTitle();
    console.log('title.getTitle():',t);
    /// Змінюємо назву вкладки у браузері
    this.title.setTitle('App Component Page!')

    /// Додаємо ці мета теги в HTML -> <head></head>
    this.meta.addTags([
      {name: 'name', content: 'angular, google'},
      {name: 'describtion', content: 'this is app component!'}
    ])
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)

    component.instance.title = "Dynamic Title"
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }
}

