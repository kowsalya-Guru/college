import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminButtonsComponent } from './buttons/buttons.component';
import { ComponentsRoutes } from './components.routing';
import { AdminGridSystemComponent } from './grid/grid.component';
import { AdminIconsComponent } from './icons/icons.component';
import { AdminNotificationsComponent } from './notifications/notifications.component';
import { AdminPanelsComponent } from './panels/panels.component';
import { AdminSweetAlertComponent } from './sweetalert/sweetalert.component';
import { AdminTypographyComponent } from './typography/typography.component';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { SidebarComponent } from 'app/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ComponentsRoutes),
        FormsModule,
        SidebarModule,
    ],
    declarations: [
        AdminButtonsComponent,
        AdminGridSystemComponent,
        AdminIconsComponent,
        AdminNotificationsComponent,
        AdminPanelsComponent,
        AdminSweetAlertComponent,
        AdminTypographyComponent,
        // SidebarComponent
        
    ],
})

export class AdminComponentsModule {}
