import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';​
import { EventEmitter } from 'protractor';
import { AuthService } from '../pages.service';
​
declare var $:any;
​
@Component({
    // moduleId: module.id,
    selector: 'admin-login-cmp',
    templateUrl: './admin-login.component.html'
})
​
export class AdminLoginComponent implements OnInit{
   focus;
   focus1;
   focus2;
     test : Date = new Date();
     private toggleButton;
     private sidebarVisible: boolean;
     isLoading: boolean;
    authStatusSub: any;
​
    // private sidebarVisible: boolean;
​
    // constructor(private element : ElementRef) {
    //     this.sidebarVisible = false;
    // }
    constructor(public authService: AuthService) {}
    // constructor() {}
​
     checkFullPageBackgroundImage(){
         var $page = $('.full-page');
         var image_src = $page.data('image');
​
         if(image_src !== undefined){
             var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
             $page.append(image_container);
         }
         else 
         {
            throw new Error('Method not implemented.');
        }
    };

    ngOnInit(){
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        //var navbar : HTMLElement = this.element.nativeElement;
        //this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        
        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    } 
    
    onLogin(form: NgForm) {
        this.authStatusSub = this.authService.getAuthStatusListener()
        .subscribe(
            authStatus => {
              this.isLoading = false;
            }
        );
        if(form.invalid) {
          return;
        }
        this.isLoading = true;
        this.authService.Adminlogin(form.value.email, form.value.password);
    }
​
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
​
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if(this.sidebarVisible == false){
             setTimeout(function(){
                 toggleButton.classList.add('toggled');
             },500);
             body.classList.add('nav-open');
            this.sidebarVisible = true;
         } else {
             this.toggleButton.classList.remove('toggled');
             this.sidebarVisible = false;
             body.classList.remove('nav-open');
         }
     }
}