import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'menu-orden-pedido',
  templateUrl: './menu-orden-pedido.component.html',
  styleUrls: ['./menu-orden-pedido.component.scss']
})
export class MenuOrdenPedidoComponent {

  @Input('moneda') moneda: string = 'USD';
  @Input('lista_categorias') lista_categorias: any[] = [];

  @Output() category_selected = new EventEmitter<any>();
  @Output() product_selected = new EventEmitter<any>();

  lista_productos: any[] = [];

  selected_category(item: any) {
    this.lista_productos = item.productos;
    this.lista_categorias.forEach((element: any) => {
      element.selected = false;
      if (element == item) {
        element.selected = true;
      }
    });
    this.category_selected.emit(item);
  }

  selected_product(item: any) {
    this.lista_productos.forEach((element: any) => {
      element.selected = false;
      if (element == item) {
        element.selected = true;
      }
    });
    this.product_selected.emit(item);
  }
}
