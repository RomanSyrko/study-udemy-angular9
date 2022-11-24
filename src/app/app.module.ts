import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PipeNumbersComponent} from './pipe-numbers/pipe-numbers.component';
import {PipeStringsComponent} from './pipe-strings/pipe-strings.component';
import {PipeDateComponent} from './pipe-date/pipe-date.component';
import {PipeAdditionalComponent} from './pipe-additional/pipe-additional.component';
import {OwnPipesComponent} from './own-pipes/own-pipes.component';
import {MultByPipe} from './own-pipes/mult-by.pipe';
import {ExMarksPipe} from './own-pipes/ex-marks.pipe';
import {FilterListsComponent} from './filter-lists/filter-lists.component';
import {FilterPipe} from './filter-lists/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeNumbersComponent,
    PipeStringsComponent,
    PipeDateComponent,
    PipeAdditionalComponent,
    OwnPipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterListsComponent,
    FilterPipe
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
