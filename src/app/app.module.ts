import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AnimationsComponent} from './animations/animations.component';
import {TransitionComponent} from './transition/transition.component';
import {SpecialTransitionComponent} from "./special-transition/special-transition.component";
import {VisibleComponent} from './visible/visible.component';
import {GroupComponent} from './group/group.component';
import {QueryComponent} from './query/query.component';
import {KeyframesComponent} from './keyframes/keyframes.component';
import {EventAnimationComponent} from './event-animation/event-animation.component';
import {NgAnimateComponent} from './ng-animate/ng-animate.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    TransitionComponent,
    SpecialTransitionComponent,
    VisibleComponent,
    GroupComponent,
    QueryComponent,
    KeyframesComponent,
    EventAnimationComponent,
    NgAnimateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
