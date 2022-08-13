import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapa1Component } from './form-etapa1.component';

describe('FormEtapa1Component', () => {
  let component: FormEtapa1Component;
  let fixture: ComponentFixture<FormEtapa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapa1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
