import { Routes } from '@angular/router';

import { StudentDashboardComponent } from './student-dashboard.component';

export const StudentDashboardRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'studentdashboard',
      component: StudentDashboardComponent
  }]
}];
