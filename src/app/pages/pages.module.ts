import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        LockComponent,
        AdminLoginComponent,
        StaffLoginComponent,
        StudentLoginComponent
    ]
    
})

export class PagesModule {}
