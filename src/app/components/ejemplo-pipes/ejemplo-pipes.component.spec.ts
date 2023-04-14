import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPipesComponent } from './ejemplo-pipes.component';

describe('EjemploPipesComponent', () => {
  let component: EjemploPipesComponent;
  let fixture: ComponentFixture<EjemploPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
