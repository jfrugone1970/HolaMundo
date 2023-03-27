import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArrayComponent } from './formulario-array.component';

describe('FormularioArrayComponent', () => {
  let component: FormularioArrayComponent;
  let fixture: ComponentFixture<FormularioArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
