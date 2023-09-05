import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuOrdenPedidoModule } from 'projects/pasthortown/menu-orden-pedido/src/public-api';
import { ListaOrdenPedidoModule } from 'projects/pasthortown/lista-orden-pedido/src/public-api';
import { KeyboardModule } from 'projects/pasthortown/keyboard/src/public-api';
import { CabeceraInformativaModule } from 'projects/pasthortown/cabecera-informativa/src/public-api';
import { BotonesPagoEfectivoModule } from 'projects/pasthortown/botones-pago-efectivo/src/public-api';
import { ConnectionServiceModule } from 'ngx-connection-service';
import { PwaDataServiceService } from './services/pwa-data-service.service';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'PruebaPWA',
  version: 1,
  objectStoresMeta: [
    {
      store: 'AlmacenDatos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } }
      ],
    },
  ],
};

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
    KeyboardModule,
    ConnectionServiceModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [
    PwaDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
