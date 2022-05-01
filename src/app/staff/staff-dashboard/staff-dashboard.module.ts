import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
import { StaffDashboardComponent } from './staff-dashboard.component';

import { StaffDashboardRoutes } from './staff-dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StaffDashboardRoutes),
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })
    ],
    declarations: [StaffDashboardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StaffDashboardModule {}
