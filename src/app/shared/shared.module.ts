import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule]
})
export class SharedModule {
}

/// Створений для того, щоб два рази не підключати HttpClientModule в головний модуль і в Адмінський модуль
/// А звідси ми просто експортнемо цей файл
