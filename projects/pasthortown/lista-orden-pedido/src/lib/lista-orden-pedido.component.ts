import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lista-orden-pedido',
  templateUrl: './lista-orden-pedido.component.html',
  styleUrls: ['./lista-orden-pedido.component.scss']
})
export class ListaOrdenPedidoComponent {

  @Input('orden_pedido') ordenPedido: any[] = [];
  @Input('moneda') moneda: string = 'USD';

  @Output() item_selected = new EventEmitter<any>();

  selected(item: any) {
    this.item_selected.emit(item);
  }
}
