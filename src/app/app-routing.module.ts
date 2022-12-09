import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";
import {AboutExtraComponent} from "./about-extra/about-extra.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {AuthGuard} from "./auth.guard";

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/about/extra -> AboutExtraComponent
// http://localhost:4200/posts -> PostsComponent
/// Руєструємо шляхи:
const routes: Routes = [
  {path: '', component: HomeComponent}, /// Домашню сторінку буз слещу - /
  {
    path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      {path: 'extra', component: AboutExtraComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]}, /// canActivate: [AuthGuard] = захист сторінки
  {path: 'posts/:id', component: PostComponent}, /// динамічний роутінг через дві крапки - posts/:id
  {path: 'error', component: ErrorPageComponent},
  /// {path: '**', redirectTo: '...'} - завжди пишемо в кінці, для обробки усіх не зареєстрованих шляхів.
  {path: '**', redirectTo: '/error'}
]

/// Імпоруємо і експортуємо RouterModule як масив
@NgModule({
  /// Реєструємо той масив, який ми створили вище через метод .forRoot(routes)
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/// Укспортуємо в головний app.module.ts
export class AppRoutingModule {
}
