import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioReportComponent } from './usuario-report.component';

describe('UsuarioReportComponent', () => {
  let component: UsuarioReportComponent;
  let fixture: ComponentFixture<UsuarioReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
