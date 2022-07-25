import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaypackComponent } from './holidaypack.component';

describe('HolidaypackComponent', () => {
  let component: HolidaypackComponent;
  let fixture: ComponentFixture<HolidaypackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaypackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaypackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
