import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { PipeNumbersComponent } from './pipe-numbers/pipe-numbers.component';
import { PipeStringsComponent } from './pipe-strings/pipe-strings.component';
import { PipeDateComponent } from './pipe-date/pipe-date.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeNumbersComponent,
    PipeStringsComponent,
    PipeDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
