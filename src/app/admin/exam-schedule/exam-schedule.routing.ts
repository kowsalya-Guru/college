import { Routes } from '@angular/router';
import { ExamScheduleComponent } from './exam-schedule.component';

// import { UserDetailsComponent } from './user-details.component';

export const ExamRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'exam-schedule',
      component: ExamScheduleComponent
  }]
}];
