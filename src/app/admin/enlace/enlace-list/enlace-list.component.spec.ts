import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceListComponent } from './enlace-list.component';

describe('EnlaceListComponent', () => {
  let component: EnlaceListComponent;
  let fixture: ComponentFixture<EnlaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
