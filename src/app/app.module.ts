import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {InterpolationComponent} from './interpolation/interpolation.component';
import {BindingComponent} from './binding/binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {ToWayBindingComponent} from "./to-way-binding/to-way-binding.component";
import { NgStyleComponent } from './ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    EventBindingComponent,
    ToWayBindingComponent,
    NgStyleComponent,
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
