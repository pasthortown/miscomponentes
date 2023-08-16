import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraInformativaComponent } from './cabecera-informativa.component';

describe('CabeceraInformativaComponent', () => {
  let component: CabeceraInformativaComponent;
  let fixture: ComponentFixture<CabeceraInformativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraInformativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
