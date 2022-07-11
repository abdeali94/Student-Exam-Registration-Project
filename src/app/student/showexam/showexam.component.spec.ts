import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowexamComponent } from './showexam.component';

describe('ShowexamComponent', () => {
  let component: ShowexamComponent;
  let fixture: ComponentFixture<ShowexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
