import { Routes } from '@angular/router';

import { AdminExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { AdminRegularFormsComponent } from './regularforms/regularforms.component';
import { AdminValidationFormsComponent } from './validationforms/validationforms.component';
import { AdminWizardComponent } from './wizard/wizard.component';

export const FormsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'regular',
            component: AdminRegularFormsComponent
        }]
    },{
        path: '',
        children: [{
            path: 'extended',
            component: AdminExtendedFormsComponent
        }]
    },{
        path: '',
        children: [{
            path: 'validation',
            component: AdminValidationFormsComponent
        }]
    },{
        path: '',
        children: [{
            path: 'wizard',
            component: AdminWizardComponent
        }]
    }
];
