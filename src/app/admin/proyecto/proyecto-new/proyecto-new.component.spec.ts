import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoNewComponent } from './proyecto-new.component';

describe('ProyectoNewComponent', () => {
  let component: ProyectoNewComponent;
  let fixture: ComponentFixture<ProyectoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
