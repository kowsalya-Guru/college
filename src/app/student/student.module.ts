import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentRoutes } from './student.routing';
// import { StaffRoutes } from './staff.routing';
// import { AdminRoutes } from './admin.routing';


// import { TablesRoutes } from './tables/tables.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StudentRoutes),
        FormsModule
    ],
    declarations: [
        // ExtendedTableComponent,
        // DataTableComponent,
        // RegularTableComponent
    ]
})

export class StudentModule {}
