import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIlustracaoComponent } from './form-ilustracao.component';

describe('FormIlustracaoComponent', () => {
  let component: FormIlustracaoComponent;
  let fixture: ComponentFixture<FormIlustracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIlustracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIlustracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
