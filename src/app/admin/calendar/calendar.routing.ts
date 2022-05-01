import { Routes } from '@angular/router';

import { AdminCalendarComponent } from './calendar.component';

export const CalendarRoutes: Routes = [{
    path: '',
    children: [{
        path: 'calendar',
        component: AdminCalendarComponent
    }]
}];
