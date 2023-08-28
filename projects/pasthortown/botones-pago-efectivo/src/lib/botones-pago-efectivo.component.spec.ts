import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesPagoEfectivoComponent } from './botones-pago-efectivo.component';

describe('BotonesPagoEfectivoComponent', () => {
  let component: BotonesPagoEfectivoComponent;
  let fixture: ComponentFixture<BotonesPagoEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesPagoEfectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesPagoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
