import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberschemesComponent } from './memberschemes.component';

describe('MemberschemesComponent', () => {
  let component: MemberschemesComponent;
  let fixture: ComponentFixture<MemberschemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberschemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberschemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
