import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoNewComponent } from './empleado-new.component';

describe('EmpleadoNewComponent', () => {
  let component: EmpleadoNewComponent;
  let fixture: ComponentFixture<EmpleadoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
