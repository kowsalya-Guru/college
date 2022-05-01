import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminDashboardComponent } from './dashboard.component';

import { DashboardRoutes } from './dashboard.routing';
import { SidebarModule } from 'app/sidebar/sidebar.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        // SidebarModule,
       
    ],
    declarations: [AdminDashboardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule {}
