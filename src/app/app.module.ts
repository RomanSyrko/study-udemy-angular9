import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppCounterComponent} from './app-counter/app-counter.component';
import {LocalCounterComponent} from './local-counter/local-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCounterComponent,
    LocalCounterComponent
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
