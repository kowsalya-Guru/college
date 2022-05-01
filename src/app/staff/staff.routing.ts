import { Routes } from '@angular/router';


export const StaffRoutes: Routes = [{
    path: '',
    children: [{
            path: '',
            loadChildren: './staff-dashboard/staff-dashboard.module#StaffDashboardModule'
        },{
            path: '',
            loadChildren: './exam-staff/exam-staff.module#ExamStaffModule'
        }]
}];
