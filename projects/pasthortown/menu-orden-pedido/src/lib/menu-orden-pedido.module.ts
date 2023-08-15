import { NgModule } from '@angular/core';
import { MenuOrdenPedidoComponent } from './menu-orden-pedido.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuOrdenPedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    MenuOrdenPedidoComponent
  ]
})
export class MenuOrdenPedidoModule { }
