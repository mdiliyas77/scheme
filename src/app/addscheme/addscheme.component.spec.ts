import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschemeComponent } from './addscheme.component';

describe('AddschemeComponent', () => {
  let component: AddschemeComponent;
  let fixture: ComponentFixture<AddschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
