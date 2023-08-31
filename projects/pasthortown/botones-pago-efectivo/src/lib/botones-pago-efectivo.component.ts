import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botones-pago-efectivo',
  templateUrl: './botones-pago-efectivo.component.html',
  styleUrls: ['./botones-pago-efectivo.component.scss']
})
export class BotonesPagoEfectivoComponent {

  @Output() keypress = new EventEmitter<any>();
  @Input('moneda') moneda: string = 'USD';
  @Input('cards') cards: any[] = [];
  @Input('bills') bills: any[] = [];
  @Input('coins') coins: any[] = [];
  @Input('cards_container_width') cards_container_width: string = '12px';
  @Input('bills_container_width') bills_container_width: string = '170px';
  @Input('coins_container_width') coins_container_width: string = '60px';

  button_press(data: any) {
    this.keypress.emit(data);
  }
}
