import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
import { StudentDashboardComponent } from './student-dashboard.component';

import { StudentDashboardRoutes } from './student-dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StudentDashboardRoutes),
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })
    ],
    declarations: [StudentDashboardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StudentDashboardModule {}
