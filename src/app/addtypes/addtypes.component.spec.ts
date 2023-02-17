import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypesComponent } from './addtypes.component';

describe('AddtypesComponent', () => {
  let component: AddtypesComponent;
  let fixture: ComponentFixture<AddtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
