import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnidadoComponent } from './formulario-anidado.component';

describe('FormularioAnidadoComponent', () => {
  let component: FormularioAnidadoComponent;
  let fixture: ComponentFixture<FormularioAnidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAnidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAnidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
