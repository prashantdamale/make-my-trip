import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYExperienceComponent } from './myexperience.component';

describe('MYExperienceComponent', () => {
  let component: MYExperienceComponent;
  let fixture: ComponentFixture<MYExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MYExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
