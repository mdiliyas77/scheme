import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmembersComponent } from './viewmembers.component';

describe('ViewmembersComponent', () => {
  let component: ViewmembersComponent;
  let fixture: ComponentFixture<ViewmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
