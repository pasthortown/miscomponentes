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
      descuento: false,
      subproductos: [
        {
          cantidad: 1,
          descripcion: 'Hamburguesa 1',
          modificadores: [
            { cantidad: 0, descripcion: "Sin cebolla", precio: 0, descuento: false },
            { cantidad: 0, descripcion: "Tomate Cherry", precio: 0, descuento: false },
            { cantidad: 1, descripcion: "Agrandado", precio: 0.5, descuento: true }
          ]
        },
        {
          cantidad: 1,
          descripcion: 'Hamburguesa 2',
          descuento: false,
          modificadores: [
            { cantidad: 0, descripcion: 'Tomate Cherry', precio: 0 },
            { cantidad: 1, descripcion: 'Agrandado', precio: 0.5 },
            { cantidad: 2, descripcion: 'Carne Extra', precio: 5 }
          ]
        }
      ],
      modificadores: [
        { cantidad: 2, descripcion: 'Desechables', precio: 0.35, descuento: true },
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

  lista_categorias: any[] = [
    {
      description: 'Martes Locos',
      color: 'purple',
      selected: false,
      image: 'https://images.getduna.com/2bb258f4-051d-4a46-9321-b0a7a857cd71/28292942913db08a_2916CA10-78BA-EA11-80EE-000D3A019254_744x744.png?d=300x300&format=webp',
      productos: [
        {
          description: 'Martes Loco 7 Presas',
          price: 8.99,
          color: 'red',
          selected: false,
          image: 'https://images.getduna.com/2bb258f4-051d-4a46-9321-b0a7a857cd71/28292942913db08a_domicilio_56586_745x745_1687201587.png?d=300x300&format=webp'
        },
        {
          description: 'Big Box Ultra',
          price: 6.50,
          color: 'yellow',
          selected: false,
          image: 'https://images.getduna.com/2bb258f4-051d-4a46-9321-b0a7a857cd71/28292942913db08a_domicilio_46589_744x744_1679530547.png?d=300x300&format=webp'
        },
        {
          description: 'Mega Wow Box Pop Corn',
          price: 5.50,
          color: 'green',
          selected: false,
          image: 'https://images.getduna.com/2bb258f4-051d-4a46-9321-b0a7a857cd71/28292942913db08a_domicilio_55558_744x744_1679512654.png?d=300x300&format=webp'
        },
      ]
    }
  ];

  selected_item(event: any) {
    console.log(event);
  }
}
