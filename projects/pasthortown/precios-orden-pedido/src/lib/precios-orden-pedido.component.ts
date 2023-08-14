import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-precios-orden-pedido',
  templateUrl: './precios-orden-pedido.component.html',
  styleUrls: ['./precios-orden-pedido.component.scss']
})

export class PreciosOrdenPedidoComponent {

  @Input('totales') totales_detalle: { key: string, value: number }[] = [];
  @Input('moneda') moneda: string = '$';
}
