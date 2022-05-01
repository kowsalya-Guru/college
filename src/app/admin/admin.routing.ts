import { Routes } from '@angular/router';
// import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AdminRoutes: Routes = [
    
{
    path: '',
    children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'components',
            loadChildren: './components/components.module#AdminComponentsModule'
        },{
            path: '',
            loadChildren: './user-details/user-details.module#UserDetailsModule'
        },{
            path: '',
            loadChildren: './exam-schedule/exam-schedule.module#ExamModule'
        },{
            path: '',
            loadChildren: './event/event.module#EventModule'
        },{
            path: '',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: '',
            loadChildren: './tables/tables.module#TablesModule'
        },{
            path: '',
            loadChildren: './maps/maps.module#MapsModule'
        },{
            path: '',
            loadChildren: './charts/charts.module#ChartsModule'
        },{
            path: '',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
        },{
            path: '',
            loadChildren: './widgets/widgets.module#WidgetsModule'
        }]
}];
