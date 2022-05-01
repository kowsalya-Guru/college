import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamStaffComponent } from './exam-staff.component';

describe('ExamStaffComponent', () => {
  let component: ExamStaffComponent;
  let fixture: ComponentFixture<ExamStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
