import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrdenPedidoComponent } from './menu-orden-pedido.component';

describe('MenuOrdenPedidoComponent', () => {
  let component: MenuOrdenPedidoComponent;
  let fixture: ComponentFixture<MenuOrdenPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrdenPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOrdenPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
