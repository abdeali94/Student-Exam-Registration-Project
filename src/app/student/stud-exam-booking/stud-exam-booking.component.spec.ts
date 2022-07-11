import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudExamBookingComponent } from './stud-exam-booking.component';

describe('StudExamBookingComponent', () => {
  let component: StudExamBookingComponent;
  let fixture: ComponentFixture<StudExamBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudExamBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudExamBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
