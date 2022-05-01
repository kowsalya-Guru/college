import { Routes } from '@angular/router';

import { AdminLayoutComponent } from '../app/layouts/admin/admin-layout.component'
import { AuthLayoutComponent } from '../app/layouts/auth/auth-layout.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StaffLayoutComponent } from './layouts/staff/staff-layout.component';
// import { StaffLayoutComponent } from './staff/layouts/staff/staff-layout.component';
// import { StudentLayoutComponent } from './student/layouts/student/student-layout.component';

export const AppRoutes: Routes = [{
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full',

      },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
          path: 'admin',
          loadChildren: './admin/admin.module#AdminModule',
        }]
      },{
          path: '',
          component: StaffLayoutComponent,
          children: [{
            path: 'staff',
            loadChildren: './staff/staff.module#StaffModule',
          }]
      },
        // {
        //     path: 'staff-login',
        //     component: StaffLayoutComponent,
        //     children: [{
        //         path: '',
        //         loadChildren: './staff/staff-dashboard/staff-dashboard.module#StaffDashboardModule'
        //     },{
        //         path: 'components',
        //         loadChildren: './staff/components/components.module#ComponentsModule'
        //     },{
        //         path: 'forms',
        //         loadChildren: './staff/forms/forms.module#Forms'
        //     },{
        //         path: 'tables',
        //         loadChildren: './staff/tables/tables.module#TablesModule'
        //     },{
        //         path: 'maps',
        //         loadChildren: './staff/maps/maps.module#MapsModule'
        //     },{
        //         path: 'charts',
        //         loadChildren: './staff/charts/charts.module#ChartsModule'
        //     },{
        //         path: 'calendar',
        //         loadChildren: './staff/calendar/calendar.module#CalendarModule'
        //     },{
        //         path: '',
        //         loadChildren: './staff/userpage/user.module#UserModule'
        //     },{
        //         path: '',
        //         loadChildren: './staff/timeline/timeline.module#TimelineModule'
        //     },{
        //         path: '',
        //         loadChildren: './staff/widgets/widgets.module#WidgetsModule'
        //     }]
        //     },
        // {
        //     path: 'student-login',
        //     component: StudentLayoutComponent,
        //     children: [{
        //         path: '',
        //         loadChildren: './student/student-dashboard/student-dashboard.module#StudentDashboardModule'
        //     },
        //     {
        //         path: 'components',
        //         loadChildren: './student/components/components.module#ComponentsModule'
        //     }
        //     ,{
        //         path: 'forms',
        //         loadChildren: './student/forms/forms.module#Forms'
        //     },{
        //         path: 'tables',
        //         loadChildren: './student/tables/tables.module#TablesModule'
        //     },{
        //         path: 'maps',
        //         loadChildren: './student/maps/maps.module#MapsModule'
        //     },{
        //         path: 'charts',
        //         loadChildren: './student/charts/charts.module#ChartsModule'
        //     },{
        //         path: 'calendar',
        //         loadChildren: './student/calendar/calendar.module#CalendarModule'
        //     },{
        //         path: '',
        //         loadChildren: './student//userpage/user.module#UserModule'
        //     },{
        //         path: '',
        //         loadChildren: './student//timeline/timeline.module#TimelineModule'
        //     },{
        //         path: '',
        //         loadChildren: './student/widgets/widgets.module#WidgetsModule'
        //     }]
        //     },
        
        {
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
