import { Routes } from '@angular/router';

import { StaffDashboardComponent } from './staff-dashboard.component';

export const StaffDashboardRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'staff-dashboard',
      component: StaffDashboardComponent
  }]
}];
