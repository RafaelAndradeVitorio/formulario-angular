import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapa2Component } from './form-etapa2.component';

describe('FormEtapa2Component', () => {
  let component: FormEtapa2Component;
  let fixture: ComponentFixture<FormEtapa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
