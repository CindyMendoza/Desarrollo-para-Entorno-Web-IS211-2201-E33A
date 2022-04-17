import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoListComponent } from './proyecto-list.component';

describe('ProyectoListComponent', () => {
  let component: ProyectoListComponent;
  let fixture: ComponentFixture<ProyectoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
