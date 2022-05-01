import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
import { DataTablesModule } from 'angular-datatables';
import { EventComponent } from './event.component';
import { EventRoutes } from './event.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(EventRoutes),
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        ReactiveFormsModule,
        DataTablesModule
    ],
    declarations: [EventComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EventModule {}
