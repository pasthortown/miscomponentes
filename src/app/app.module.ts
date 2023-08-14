import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuOrdenPedidoModule } from 'projects/pasthortown/menu-orden-pedido/src/public-api';
import { ListaOrdenPedidoModule } from 'projects/pasthortown/lista-orden-pedido/src/public-api';
import { PreciosOrdenPedidoModule } from 'projects/pasthortown/precios-orden-pedido/src/public-api';
import { KeyboardModule } from 'projects/pasthortown/keyboard/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuOrdenPedidoModule,
    ListaOrdenPedidoModule,
    PreciosOrdenPedidoModule,
    KeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
