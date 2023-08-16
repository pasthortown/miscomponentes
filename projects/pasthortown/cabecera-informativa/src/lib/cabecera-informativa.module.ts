import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CabeceraInformativaComponent } from './cabecera-informativa.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CabeceraInformativaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    CabeceraInformativaComponent
  ]
})
export class CabeceraInformativaModule { }
