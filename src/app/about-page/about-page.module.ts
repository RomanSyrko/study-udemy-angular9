import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AboutPageComponent} from "./about-page.component";
import {AboutExtraPageComponent} from "./about-extra-page/about-extra-page.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    /// .forRoot - Викликається лише у основному модулі, а .forChild в дочірніх модулях.
    RouterModule.forChild([
      {
        path: '', component: AboutPageComponent, children: [
          {path: 'extra', component: AboutExtraPageComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AboutPageModule {
}
