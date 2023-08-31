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
    {key: 'Sub Total', value: 48.30, type: 'moneda', backgroundcolor: 'blue', color: 'pink', fontsize: '15px', fontweight: 'bold'},
    {key: 'IVA 12%', value: 5.796, type: 'moneda'},
    {key: 'Servicio 10%', value: 4.83, type: 'moneda'},
    {key: 'Domicilio', value: 2.50, type: 'moneda'},
    {key: 'Descuentos', value: -5.56, type: 'moneda', backgroundcolor: 'green', color: 'white', fontsize: '15px', fontweight: 'bold'},
    {key: 'Total', value: 55.866, type: 'moneda', backgroundcolor: '#FF0029', color: 'white', fontsize: '24px', fontweight: 'bold'},
  ];

  cabecera_orden_pedido = [
    {key: 'Mesa', value: 48, fontsize: '14px', fontweight: 'bold'},
    {key: 'Número Órden', value: 5, fontsize: '14px', fontweight: 'bold'},
    {key: 'Cajero', value: 'Luis Salazar', fontsize: '14px', fontweight: 'bold'},
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

  bills: any[] = [
    {number: 5, value: 5},
    {number: 10, value: 10},
    {number: 20, value: 20},
    {number: 50, value: 50},
    {number: 100, value: 100}
  ];

  cards: any[] = [
    {image: 'https://th.bing.com/th/id/OIP.B3NM8WAJFRbORqDnG58cqwHaEq?w=265&h=180&c=7&r=0&o=5&pid=1.7', name: 'visa'},
    {image: 'https://th.bing.com/th/id/OIP.B3NM8WAJFRbORqDnG58cqwHaEq?w=265&h=180&c=7&r=0&o=5&pid=1.7', name: 'mastercard'},
    {image: 'https://th.bing.com/th/id/OIP.B3NM8WAJFRbORqDnG58cqwHaEq?w=265&h=180&c=7&r=0&o=5&pid=1.7', name: 'dinners'}
  ];

  coins: any[] = [
    {value:0.01, number:1, color: 'gold'},
    {value:0.05, number:5, color: 'silver'},
    {value:0.1, number:10, color: 'silver'},
    {value:0.25, number:25, color: 'silver'},
    {value:0.5, number:50, color: 'silver'}
  ];

  selected_item(event: any) {
    console.log(event);
  }
}
