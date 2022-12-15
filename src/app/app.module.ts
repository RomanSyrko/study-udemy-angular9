import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts/posts.component'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
