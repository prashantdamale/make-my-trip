import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaybookingComponent } from './onewaybooking.component';

describe('OnewaybookingComponent', () => {
  let component: OnewaybookingComponent;
  let fixture: ComponentFixture<OnewaybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnewaybookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnewaybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
