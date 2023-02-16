import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllschemesComponent } from './allschemes.component';

describe('AllschemesComponent', () => {
  let component: AllschemesComponent;
  let fixture: ComponentFixture<AllschemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllschemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllschemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
