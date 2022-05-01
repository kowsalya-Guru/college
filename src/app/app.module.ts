import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
// import { SidebarModule } from '../app/admin/sidebar/sidebar.module';
// import { FixedPluginModule } from '../app/admin/shared/fixedplugin/fixedplugin.module';
// import { FooterModule } from '../app/admin/shared/footer/footer.module';
// import { NavbarModule} from '../app/admin/shared/navbar/navbar.module';
// import { AdminLayoutComponent } from '../app/admin/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from '../app/layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { LandingpageComponent } from './landingpage/landingpage.component';
// import { StudentLayoutComponent } from './student/layouts/student/student-layout.component';
// import { StaffLayoutComponent } from './staff/staff/staff-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffLayoutComponent } from './layouts/staff/staff-layout.component';

@NgModule({
    imports:      [
        RouterModule.forRoot(AppRoutes,{
            useHash: true
        }),
        BrowserAnimationsModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
    ],
    declarations: [
        AppComponent,
        // StudentLayoutComponent,
        StaffLayoutComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LandingpageComponent,
    ],
    exports:[],
    bootstrap:    [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})

export class AppModule { }
