import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoViewComponent } from './proyecto-view.component';

describe('ProyectoViewComponent', () => {
  let component: ProyectoViewComponent;
  let fixture: ComponentFixture<ProyectoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
