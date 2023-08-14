import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ListaOrdenPedidoComponent } from './lista-orden-pedido.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListaOrdenPedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ListaOrdenPedidoComponent
  ]
})
export class ListaOrdenPedidoModule { }
