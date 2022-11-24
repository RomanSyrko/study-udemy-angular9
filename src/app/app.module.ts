import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {GetAccessToTheElementsComponent} from './get-access-to-the-elements/get-access-to-the-elements.component';
import {getAccessToTheElementsDirective} from "./get-access-to-the-elements/get-access-to-the-elements.directive";
import {AddEventsComponent} from './add-events/add-events.component';
import {AddEventsDirective} from './add-events/add-events.directive';
import {
  PassingParametersToTheDirectiveComponent
} from './passing-parameters-to-the-directive/passing-parameters-to-the-directive.component';
import {
  PassingParametersToTheDirectiveDirective
} from './passing-parameters-to-the-directive/passing-parameters-to-the-directive.directive';
import {HostBindingComponent} from './host-binding/host-binding.component';
import {HostBindingDirective} from './host-binding/host-binding.directive';
import {StructuralDirectivesComponent} from './structural-directives/structural-directives.component';
import {StructuralDirectivesDirective} from './structural-directives/structural-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    GetAccessToTheElementsComponent,
    getAccessToTheElementsDirective,
    AddEventsComponent,
    AddEventsDirective,
    PassingParametersToTheDirectiveComponent,
    PassingParametersToTheDirectiveDirective,
    HostBindingComponent,
    HostBindingDirective,
    StructuralDirectivesComponent,
    StructuralDirectivesDirective,
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
