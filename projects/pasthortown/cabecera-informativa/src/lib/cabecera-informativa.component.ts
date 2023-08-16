import { Component, Input } from '@angular/core';

@Component({
  selector: 'cabecera-informativa',
  templateUrl: './cabecera-informativa.component.html',
  styleUrls: ['./cabecera-informativa.component.scss']
})
export class CabeceraInformativaComponent {
  @Input('segmentos') segmentos: any[] = [];
  @Input('moneda') moneda: string = 'USD';
}
