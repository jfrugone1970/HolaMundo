import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAnimacionComponent } from './ejemplo-animacion.component';

describe('EjemploAnimacionComponent', () => {
  let component: EjemploAnimacionComponent;
  let fixture: ComponentFixture<EjemploAnimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploAnimacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploAnimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
