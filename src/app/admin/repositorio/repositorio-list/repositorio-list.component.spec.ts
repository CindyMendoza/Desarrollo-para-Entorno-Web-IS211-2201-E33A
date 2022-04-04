import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioListComponent } from './repositorio-list.component';

describe('RepositorioListComponent', () => {
  let component: RepositorioListComponent;
  let fixture: ComponentFixture<RepositorioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositorioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
