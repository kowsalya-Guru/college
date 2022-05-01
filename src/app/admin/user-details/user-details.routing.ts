import { Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';

export const UserDetailsRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'user-details',
      component: UserDetailsComponent
  }]
}];
