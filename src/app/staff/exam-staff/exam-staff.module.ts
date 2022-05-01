import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
// import { AdminDashboardComponent } from './dashboard.component';

// import { DashboardRoutes } from './dashboard.routing';
// import { UserDetailsComponent } from './user-details.component';
// import { UserDetailsRoutes } from './user-details.routing';
import { DataTablesModule } from 'angular-datatables';
import { ExamStaffComponent } from './exam-staff.component';
import { ExamStaffRoutes } from './exam-staff.routing';
// import { ExamRoutes } from './exam-schedule.routing';
// import { ExamScheduleComponent } from './exam-schedule.component';
// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExamStaffRoutes),
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        ReactiveFormsModule,
        DataTablesModule
        // NgSelectModule
    ],
    declarations: [ExamStaffComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExamStaffModule {}
