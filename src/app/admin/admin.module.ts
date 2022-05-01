import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutes } from './admin.routing';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponentsModule } from './components/components.module';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { DailyComponent } from './daily/daily.component';
import { EventComponent } from './event/event.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminRoutes),
        FormsModule,
        HttpClientModule
    ],
    declarations: [
    DailyComponent],
})

export class AdminModule {}
