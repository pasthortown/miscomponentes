import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuOrdenPedidoModule } from 'projects/pasthortown/menu-orden-pedido/src/public-api';
import { ListaOrdenPedidoModule } from 'projects/pasthortown/lista-orden-pedido/src/public-api';
import { KeyboardModule } from 'projects/pasthortown/keyboard/src/public-api';
import { CabeceraInformativaModule } from 'projects/pasthortown/cabecera-informativa/src/public-api';
import { BotonesPagoEfectivoModule } from 'projects/pasthortown/botones-pago-efectivo/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BotonesPagoEfectivoModule,
    MenuOrdenPedidoModule,
    ListaOrdenPedidoModule,
    CabeceraInformativaModule,
    KeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
