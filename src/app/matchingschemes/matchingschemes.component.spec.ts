import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingschemesComponent } from './matchingschemes.component';

describe('MatchingschemesComponent', () => {
  let component: MatchingschemesComponent;
  let fixture: ComponentFixture<MatchingschemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingschemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingschemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
