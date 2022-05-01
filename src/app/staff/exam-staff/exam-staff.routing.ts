import { Routes } from '@angular/router';
// import { ExamScheduleComponent } from './exam-schedule.component';
import { ExamStaffComponent } from './exam-staff.component';

// import { UserDetailsComponent } from './user-details.component';

export const ExamStaffRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'exam-staff',
      component: ExamStaffComponent
  }]
}];
