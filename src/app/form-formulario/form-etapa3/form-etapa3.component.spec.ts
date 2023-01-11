import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapa3Component } from './form-etapa3.component';

describe('FormEtapa3Component', () => {
  let component: FormEtapa3Component;
  let fixture: ComponentFixture<FormEtapa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapa3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
