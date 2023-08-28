import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botones-pago-efectivo',
  templateUrl: './botones-pago-efectivo.component.html',
  styleUrls: ['./botones-pago-efectivo.component.scss']
})
export class BotonesPagoEfectivoComponent {

  @Output() keypress = new EventEmitter<any>();
  @Input('moneda') moneda: string = 'USD';
  @Input('bills') bills: any[] = [];
  @Input('coins') coins: any[] = [];

  button_press(data: any) {
    this.keypress.emit(data);
  }
}
