import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)} /// для лінивого завантаження сторінки (сторінка завантажується лише після того, як на неї натиснути)
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules /// Ця конфігурація дозволяє попередньо завантажити модуль
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
