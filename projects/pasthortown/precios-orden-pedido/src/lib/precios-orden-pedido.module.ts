import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PreciosOrdenPedidoComponent } from './precios-orden-pedido.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PreciosOrdenPedidoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    PreciosOrdenPedidoComponent
  ]
})
export class PreciosOrdenPedidoModule { }
