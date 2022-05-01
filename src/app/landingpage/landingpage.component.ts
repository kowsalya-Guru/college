import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'app/pages/pages.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log('inside ngOnInit');
    
  }

  student() {
    localStorage.setItem("current","student")
        // this.dataservice.getCurrent('student')
    this.router.navigate(['pages/student-login'])
  }

  admin(){
    console.log('inside admin');
    // this.dataservice.getCurrent('admin')
    localStorage.setItem("current","admin")

    this.router.navigate(['pages/admin-login'])
  }

  staff(){
    console.log('inside staff');
    // this.dataservice.getCurrent('staff')
    localStorage.setItem("current","staff")


    this.router.navigate(['pages/staff-login'])
  }
}
