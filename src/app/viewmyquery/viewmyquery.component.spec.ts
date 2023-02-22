import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyqueryComponent } from './viewmyquery.component';

describe('ViewmyqueryComponent', () => {
  let component: ViewmyqueryComponent;
  let fixture: ComponentFixture<ViewmyqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmyqueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmyqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
