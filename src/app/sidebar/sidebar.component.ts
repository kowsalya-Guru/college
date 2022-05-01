import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/pages/pages.service';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
// export const Admin: RouteInfo[] = [{
//         path: '/dashboard',
//         title: 'Dashboard Content',
//         type: 'link',
//         icontype: 'nc-icon nc-bank'
//     // },{
//     //     path: '/components',
//     //     title: 'Components',
//     //     type: 'sub',
//     //     collapse: 'components',
//     //     icontype: 'nc-icon nc-layout-11',
//     //     children: [
//     //         {path: 'buttons', title: 'Buttons', ab:'B'},
//     //         {path: 'grid', title: 'Grid System', ab:'GS'},
//     //         {path: 'panels', title: 'Panels', ab:'P'},
//     //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
//     //         {path: 'notifications', title: 'Notifications', ab:'N'},
//     //         {path: 'icons', title: 'Icons', ab:'I'},
//     //         {path: 'typography', title: 'Typography', ab:'T'}
//     //     ]
//     // },{
//     //     path: '/forms',
//     //     title: 'Forms',
//     //     type: 'sub',
//     //     collapse: 'forms',
//     //     icontype: 'nc-icon nc-ruler-pencil',
//     //     children: [
//     //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
//     //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
//     //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
//     //         {path: 'wizard', title: 'Wizard', ab:'W'}
//     //     ]
//     // },{
//     //     path: '/tables',
//     //     title: 'Tables',
//     //     type: 'sub',
//     //     collapse: 'tables',
//     //     icontype: 'nc-icon nc-single-copy-04',
//     //     children: [
//     //         {path: 'regular', title: 'Regular Tables', ab:'RT'},
//     //         {path: 'extended', title: 'Extended Tables', ab:'ET'},
//     //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
//     //     ]
//     // },{
//     //     path: '/maps',
//     //     title: 'Maps',
//     //     type: 'sub',
//     //     collapse: 'maps',
//     //     icontype: 'nc-icon nc-pin-3',
//     //     children: [
//     //         {path: 'google', title: 'Google Maps', ab:'GM'},
//     //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
//     //         {path: 'vector', title: 'Vector Map', ab:'VM'}
//     //     ]
//     // },{
//     //     path: '/widgets',
//     //     title: 'Widgets',
//     //     type: 'link',
//     //     icontype: 'nc-icon nc-box'

//     },{
//         path: '/user-details',
//         title: 'User Details',
//         type: 'link',
//         icontype: 'nc-icon nc-box'

//     },{
//         path: '/exam-schedule',
//         title: 'Exam Schedule',
//         type: 'link',
//         icontype: 'nc-icon nc-box'

//     },{
//         path: '/event',
//         title: 'Event',
//         type: 'link',
//         icontype: 'nc-icon nc-box'

//     // },{
//     //     path: '/charts',
//     //     title: 'Charts',
//     //     type: 'link',
//     //     icontype: 'nc-icon nc-chart-bar-32'

//     },{
//         path: '/calendar',
//         title: 'Calendar',
//         type: 'link',
//         icontype: 'nc-icon nc-calendar-60'
//     // },{
//     //     path: '/pages',
//     //     title: 'Pages',
//     //     collapse: 'pages',
//     //     type: 'sub',
//     //     icontype: 'nc-icon nc-book-bookmark',
//     //     children: [
//     //         {path: 'timeline', title: 'Timeline Page', ab:'T'},
//     //         {path: 'user', title: 'User Page', ab:'UP'},
//     //         {path: 'login', title: 'Login Page', ab:'LP'},
//     //         {path: 'register', title: 'Register Page', ab:'RP'},
//     //         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
//     //     ]
//     }
// ];

export const Staff: RouteInfo[] = [{
    path: '/staff-dashboard',
    title: 'Dashboard Staff',
    type: 'link',
    icontype: 'nc-icon nc-bank'
},{
    path: '/exam-staff',
    title: 'View Exam Schedule',
    type: 'link',
    icontype: 'nc-icon nc-box'
}
];

// export const Student: RouteInfo[] = [{
//     path: '/dashboard',
//     title: 'Dashboard Student',
//     type: 'link',
//     icontype: 'nc-icon nc-bank'
// },{
//     path: '/components',
//     title: 'Components',
//     type: 'sub',
//     collapse: 'components',
//     icontype: 'nc-icon nc-layout-11',
//     children: [
//         {path: 'buttons', title: 'Buttons', ab:'B'},
//         {path: 'grid', title: 'Grid System', ab:'GS'},
//         {path: 'panels', title: 'Panels', ab:'P'},
//         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
//         {path: 'notifications', title: 'Notifications', ab:'N'},
//         {path: 'icons', title: 'Icons', ab:'I'},
//         {path: 'typography', title: 'Typography', ab:'T'}
//     ]
// },{
//     path: '/forms',
//     title: 'Forms',
//     type: 'sub',
//     collapse: 'forms',
//     icontype: 'nc-icon nc-ruler-pencil',
//     children: [
//         {path: 'regular', title: 'Regular Forms', ab:'RF'},
//         {path: 'extended', title: 'Extended Forms', ab:'EF'},
//         {path: 'validation', title: 'Validation Forms', ab:'VF'},
//         {path: 'wizard', title: 'Wizard', ab:'W'}
//     ]
// },{
//     path: '/tables',
//     title: 'Tables',
//     type: 'sub',
//     collapse: 'tables',
//     icontype: 'nc-icon nc-single-copy-04',
//     children: [
//         {path: 'regular', title: 'Regular Tables', ab:'RT'},
//         {path: 'extended', title: 'Extended Tables', ab:'ET'},
//         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
//     ]
// },{
//     path: '/maps',
//     title: 'Maps',
//     type: 'sub',
//     collapse: 'maps',
//     icontype: 'nc-icon nc-pin-3',
//     children: [
//         {path: 'google', title: 'Google Maps', ab:'GM'},
//         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
//         {path: 'vector', title: 'Vector Map', ab:'VM'}
//     ]
// },{
//     path: '/widgets',
//     title: 'Widgets',
//     type: 'link',
//     icontype: 'nc-icon nc-box'

// },{
//     path: '/charts',
//     title: 'Charts',
//     type: 'link',
//     icontype: 'nc-icon nc-chart-bar-32'

// },{
//     path: '/calendar',
//     title: 'Calendar',
//     type: 'link',
//     icontype: 'nc-icon nc-calendar-60'
// },{
//     path: '/pages',
//     title: 'Pages',
//     collapse: 'pages',
//     type: 'sub',
//     icontype: 'nc-icon nc-book-bookmark',
//     children: [
//         {path: 'timeline', title: 'Timeline Page', ab:'T'},
//         {path: 'user', title: 'User Page', ab:'UP'},
//         {path: 'login', title: 'Login Page', ab:'LP'},
//         {path: 'register', title: 'Register Page', ab:'RP'},
//         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
//     ]
// }
// ];

@Component({
    // moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    public url: string = '';

    constructor(public router: Router,public dataservice: AuthService) {}
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = Staff.filter(menuItem => menuItem);

        // this.url = localStorage.getItem("current");
        
        // let admin = Admin.filter(menuItem => menuItem);
        // let staff = Staff.filter(menuItem => menuItem);        
        // let student = Student.filter(menuItem => menuItem);
        // if(this.url === "admin") {
        //     this.menuItems = admin;
        // } else if(this.url === "staff") {
        //     this.menuItems = staff;
        // } else {
        //     if(this.url !== null)
        //     this.menuItems = student;
        // }
    }
    ngAfterViewInit(){
    }
}
