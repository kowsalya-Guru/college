import { Routes } from '@angular/router';

import { AdminButtonsComponent } from './buttons/buttons.component';
import { AdminGridSystemComponent } from './grid/grid.component';
import { AdminIconsComponent } from './icons/icons.component';
import { AdminNotificationsComponent } from './notifications/notifications.component';
import { AdminPanelsComponent } from './panels/panels.component';
import { AdminSweetAlertComponent } from './sweetalert/sweetalert.component';
import { AdminTypographyComponent } from './typography/typography.component';


export const ComponentsRoutes: Routes = [{
        path: '',
        children: [{
            path: 'buttons',
            component: AdminButtonsComponent
        },{
            path: 'grid',
            component: AdminGridSystemComponent
        },{
            path: 'icons',
            component: AdminIconsComponent
        },{
            path: 'notifications',
            component: AdminNotificationsComponent
        },{
            path: 'panels',
            component: AdminPanelsComponent
        },{
            path: 'sweet-alert',
            component: AdminSweetAlertComponent
        },{
            path: 'typography',
            component: AdminTypographyComponent
        }]
    }
];
