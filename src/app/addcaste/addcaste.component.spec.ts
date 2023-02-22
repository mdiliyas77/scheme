import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcasteComponent } from './addcaste.component';

describe('AddcasteComponent', () => {
  let component: AddcasteComponent;
  let fixture: ComponentFixture<AddcasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
