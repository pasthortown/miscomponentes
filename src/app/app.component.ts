import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentesmenu';
  orden_pedido = [
    {
      cantidad: 1,
      descripcion: 'Combo Familiar',
      precio: 17,
      subproductos: [
        {
          cantidad: 1,
          descripcion: 'Hamburguesa 1',
          modificadores: [
            { cantidad: 0, descripcion: "Sin cebolla", precio: 0 },
            { cantidad: 0, descripcion: "Tomate Cherry", precio: 0 },
            { cantidad: 1, descripcion: "Agrandado", precio: 0.5 }
          ]
        },
        {
          cantidad: 1,
          descripcion: 'Hamburguesa 2',
          modificadores: [
            { cantidad: 0, descripcion: 'Tomate Cherry', precio: 0 },
            { cantidad: 1, descripcion: 'Agrandado', precio: 0.5 },
            { cantidad: 2, descripcion: 'Carne Extra', precio: 5 }
          ]
        }
      ],
      modificadores: [
        { cantidad: 2, descripcion: 'Desechables', precio: 0.35 },
        { cantidad: 1, descripcion: 'Agrandado', precio: 0.8 }
      ]
    },
    {
      cantidad: 1,
      descripcion: 'Mega Combo',
      precio: 17,
      subproductos: [
        {
          cantidad: 1,
          descripcion: 'Pizza 1',
          modificadores: [
            { cantidad: 0, descripcion: "Sin cebolla", precio: 0 },
            { cantidad: 0, descripcion: "Tomate Cherry", precio: 0 },
            { cantidad: 1, descripcion: "Agrandado", precio: 0.5 }
          ]
        },
        {
          cantidad: 1,
          descripcion: 'Pizza 2',
          modificadores: [
            { cantidad: 0, descripcion: 'Tomate Cherry', precio: 0 },
            { cantidad: 1, descripcion: 'Agrandado', precio: 0.5 },
            { cantidad: 2, descripcion: 'Carne Extra', precio: 5 }
          ]
        }
      ],
      modificadores: [
        { cantidad: 2, descripcion: 'Desechables', precio: 0.35 },
        { cantidad: 1, descripcion: 'Agrandado', precio: 0.8 }
      ]
    }
  ];

  totales = [
    {key: 'Sub Total', value: 48.30},
    {key: 'IVA 12%', value: 5.796},
    {key: 'Servicio 10%', value: 4.83},
    {key: 'Domicilio', value: 2.50},
    {key: 'Descuentos', value: -5.56},
    {key: 'Total', value: 55.866},
  ];

  selected_item(event: any) {
    console.log(event);
  }
}
