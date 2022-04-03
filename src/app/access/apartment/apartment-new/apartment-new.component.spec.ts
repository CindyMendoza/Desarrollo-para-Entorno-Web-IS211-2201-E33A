import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentNewComponent } from './apartment-new.component';

describe('ApartmentNewComponent', () => {
  let component: ApartmentNewComponent;
  let fixture: ComponentFixture<ApartmentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
