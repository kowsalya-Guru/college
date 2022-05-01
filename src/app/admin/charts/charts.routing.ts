import { Routes } from '@angular/router';

import { AdminChartsComponent } from './charts.component';

export const ChartsRoutes: Routes = [{
    path: 'admin',
    children: [{
        path: 'charts',
        component: AdminChartsComponent
    }]
}];
