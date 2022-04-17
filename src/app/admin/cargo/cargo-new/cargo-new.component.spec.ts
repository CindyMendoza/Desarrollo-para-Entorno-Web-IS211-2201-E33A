import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoNewComponent } from './cargo-new.component';

describe('CargoNewComponent', () => {
  let component: CargoNewComponent;
  let fixture: ComponentFixture<CargoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
