import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'touch-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  @Input('show_numpad') show_numpad: boolean = true;
  @Input('show_qwerty') show_qwerty: boolean = true;
  @Input('suggestions') suggestions: any[] = [];

  @Output() keypress = new EventEmitter<string>();

  behavior: string = 'lower';
  teclado: any[][] = [
    [
      { lower_key:'q', upper_key: 'Q', spec_key: '1', width: 'normal', command: 'transparent' },
      { lower_key:'w', upper_key: 'W', spec_key: '2', width: 'normal', command: 'transparent' },
      { lower_key:'e', upper_key: 'E', spec_key: '3', width: 'normal', command: 'transparent' },
      { lower_key:'r', upper_key: 'R', spec_key: '4', width: 'normal', command: 'transparent' },
      { lower_key:'t', upper_key: 'T', spec_key: '5', width: 'normal', command: 'transparent' },
      { lower_key:'y', upper_key: 'Y', spec_key: '6', width: 'normal', command: 'transparent' },
      { lower_key:'u', upper_key: 'U', spec_key: '7', width: 'normal', command: 'transparent' },
      { lower_key:'i', upper_key: 'I', spec_key: '8', width: 'normal', command: 'transparent' },
      { lower_key:'o', upper_key: 'O', spec_key: '9', width: 'normal', command: 'transparent' },
      { lower_key:'p', upper_key: 'P', spec_key: '0', width: 'normal', command: 'transparent' }
    ],
    [
      { lower_key:'a', upper_key: 'A', spec_key: '@', width: 'normal', command: 'transparent' },
      { lower_key:'s', upper_key: 'S', spec_key: '#', width: 'normal', command: 'transparent' },
      { lower_key:'d', upper_key: 'D', spec_key: '$', width: 'normal', command: 'transparent' },
      { lower_key:'f', upper_key: 'F', spec_key: '_', width: 'normal', command: 'transparent' },
      { lower_key:'g', upper_key: 'G', spec_key: '&', width: 'normal', command: 'transparent' },
      { lower_key:'h', upper_key: 'H', spec_key: '-', width: 'normal', command: 'transparent' },
      { lower_key:'j', upper_key: 'J', spec_key: '+', width: 'normal', command: 'transparent' },
      { lower_key:'k', upper_key: 'K', spec_key: '(', width: 'normal', command: 'transparent' },
      { lower_key:'l', upper_key: 'L', spec_key: ')', width: 'normal', command: 'transparent' },
      { lower_key:'ñ', upper_key: 'Ñ', spec_key: '/', width: 'normal', command: 'transparent' }
    ],
    [
      { lower_key:'ABC', upper_key: 'abc', spec_key: 'ABC', width: 'fat', command: 'bloq-mayusc' },
      { lower_key:'z', upper_key: 'Z', spec_key: '*', width: 'normal', command: 'transparent' },
      { lower_key:'x', upper_key: 'X', spec_key: '"', width: 'normal', command: 'transparent' },
      { lower_key:'c', upper_key: 'C', spec_key: '´', width: 'normal', command: 'transparent' },
      { lower_key:'v', upper_key: 'V', spec_key: ':', width: 'normal', command: 'transparent' },
      { lower_key:'b', upper_key: 'B', spec_key: ';', width: 'normal', command: 'transparent' },
      { lower_key:'n', upper_key: 'N', spec_key: '!', width: 'normal', command: 'transparent' },
      { lower_key:'m', upper_key: 'M', spec_key: '?', width: 'normal', command: 'transparent' },
      { lower_key:'Borrar', upper_key: 'Borrar', spec_key: 'Borrar', width: 'fat', command: 'backspace' }
    ],
    [
      { lower_key:'123?', upper_key: '123?', spec_key: 'abc', width: 'fat', command: 'symbol' },
      { lower_key:',', upper_key: ',', spec_key: ',', width: 'normal', command: 'transparent' },
      { lower_key:'', upper_key: '', spec_key: '', width: 'huge', command: 'space' },
      { lower_key:'.', upper_key: '.', spec_key: '.', width: 'normal', command: 'transparent' },
      { lower_key:'Enter', upper_key: 'Enter', spec_key: 'Enter', width: 'fat', command: 'enter' }
    ]
  ];

  pad_numerico: any[][] = [
    [
      { lower_key:'7', upper_key: '7', spec_key: '7', width: 'normal', command: 'transparent' },
      { lower_key:'8', upper_key: '8', spec_key: '8', width: 'normal', command: 'transparent' },
      { lower_key:'9', upper_key: '9', spec_key: '9', width: 'normal', command: 'transparent' }
    ],
    [
      { lower_key:'4', upper_key: '4', spec_key: '4', width: 'normal', command: 'transparent' },
      { lower_key:'5', upper_key: '5', spec_key: '5', width: 'normal', command: 'transparent' },
      { lower_key:'6', upper_key: '6', spec_key: '6', width: 'normal', command: 'transparent' }
    ],
    [
      { lower_key:'1', upper_key: '1', spec_key: '1', width: 'normal', command: 'transparent' },
      { lower_key:'2', upper_key: '2', spec_key: '2', width: 'normal', command: 'transparent' },
      { lower_key:'3', upper_key: '3', spec_key: '3', width: 'normal', command: 'transparent' }
    ],
    [
      { lower_key:'0', upper_key: '0', spec_key: '0', width: 'normal', command: 'transparent' },
      { lower_key:'.', upper_key: '.', spec_key: '.', width: 'normal', command: 'transparent' }
    ]
  ]

  key_press(tecla: any) {
    if (tecla.command == 'symbol') {
      if (this.behavior == 'symbol') {
        this.behavior = 'lower';
      } else {
        this.behavior = 'symbol';
      }
      return;
    }
    if (tecla.command == 'bloq-mayusc') {
      if (this.behavior == 'upper') {
        this.behavior = 'lower';
      } else {
        this.behavior = 'upper';
      }
      return;
    }
    if (tecla.command == 'backspace' || tecla.command == 'space' || tecla.command == 'enter') {
      this.keypress.emit(tecla.command);
      return;
    }
    if (this.behavior == 'lower') {
      this.keypress.emit(tecla.lower_key);
      return;
    }
    if (this.behavior == 'upper') {
      this.keypress.emit(tecla.upper_key);
      return;
    }
    if (this.behavior == 'symbol') {
      this.keypress.emit(tecla.spec_key);
      return;
    }
  }
}
