import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBotaoSkipComponent } from './form-botao-skip.component';

describe('FormBotaoSkipComponent', () => {
  let component: FormBotaoSkipComponent;
  let fixture: ComponentFixture<FormBotaoSkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBotaoSkipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBotaoSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
