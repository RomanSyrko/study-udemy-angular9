import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {InterpolationComponent} from './interpolation/interpolation.component';
import {BindingComponent} from './binding/binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {ToWayBindingComponent} from "./to-way-binding/to-way-binding.component";
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    EventBindingComponent,
    ToWayBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfElseComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent,
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
