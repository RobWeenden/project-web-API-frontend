import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoForm } from './grafico-form.component';

describe('GraficoForm', () => {
  let component: GraficoForm;
  let fixture: ComponentFixture<GraficoForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
