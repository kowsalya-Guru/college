import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffRoutes } from './staff.routing';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
// import { ExamStaffComponent } from './exam-staff/exam-staff.component';
// import { AdminRoutes } from './admin.routing';


// import { TablesRoutes } from './tables/tables.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StaffRoutes),
        FormsModule,
        HttpClientModule
        // StaffModule
    ],
    declarations: [
        // ExtendedTableComponent,
        // DataTableComponent,
        // RegularTableComponent
    TaskComponent]
})

export class StaffModule {}
