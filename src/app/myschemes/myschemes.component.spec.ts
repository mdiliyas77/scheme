import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyschemesComponent } from './myschemes.component';

describe('MyschemesComponent', () => {
  let component: MyschemesComponent;
  let fixture: ComponentFixture<MyschemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyschemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyschemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
