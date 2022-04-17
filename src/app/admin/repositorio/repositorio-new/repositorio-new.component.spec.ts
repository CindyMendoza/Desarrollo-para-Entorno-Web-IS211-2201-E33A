import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioNewComponent } from './repositorio-new.component';

describe('RepositorioNewComponent', () => {
  let component: RepositorioNewComponent;
  let fixture: ComponentFixture<RepositorioNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositorioNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
