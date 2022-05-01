import { Routes } from '@angular/router';

import { AdminDashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'dashboard',
      component: AdminDashboardComponent
  }]
}];
