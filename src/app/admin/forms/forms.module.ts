import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminEqualValidator } from './equal-validator.directive';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { FormsRoutes } from './forms.routing';

import { AdminExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { AdminRegularFormsComponent } from './regularforms/regularforms.component';
import { AdminValidationFormsComponent } from './validationforms/validationforms.component';
import { AdminWizardComponent } from './wizard/wizard.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FormsRoutes),
        FormsModule,
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        NgbModule,
        FormsModule
    ],
    declarations: [
          AdminExtendedFormsComponent,
          AdminRegularFormsComponent,
          AdminValidationFormsComponent,
          AdminWizardComponent,
          AdminEqualValidator
    ]
})

export class Forms {}
