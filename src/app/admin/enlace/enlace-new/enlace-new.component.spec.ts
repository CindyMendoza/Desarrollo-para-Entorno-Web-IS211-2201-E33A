import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceNewComponent } from './enlace-new.component';

describe('EnlaceNewComponent', () => {
  let component: EnlaceNewComponent;
  let fixture: ComponentFixture<EnlaceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlaceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
