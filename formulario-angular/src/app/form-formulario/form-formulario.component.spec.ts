import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormularioComponent } from './form-formulario.component';

describe('FormFormularioComponent', () => {
  let component: FormFormularioComponent;
  let fixture: ComponentFixture<FormFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
