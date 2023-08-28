import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BotonesPagoEfectivoComponent } from './botones-pago-efectivo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BotonesPagoEfectivoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    BotonesPagoEfectivoComponent
  ]
})
export class BotonesPagoEfectivoModule { }
