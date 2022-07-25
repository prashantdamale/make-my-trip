import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivelInfoComponent } from './trivel-info.component';

describe('TrivelInfoComponent', () => {
  let component: TrivelInfoComponent;
  let fixture: ComponentFixture<TrivelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrivelInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrivelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
