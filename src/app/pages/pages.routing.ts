import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';

export const PagesRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'lock',
        component: LockComponent
    },{
        path: 'register',
        component: RegisterComponent
    },{
        path: 'admin-login',
        component: AdminLoginComponent
    },{
        path:'staff-login',
        component:StaffLoginComponent
    },{
        path:'student-login',
        component:StudentLoginComponent
    }]
    
}];
