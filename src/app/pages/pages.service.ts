import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthData } from "./pages.model";
import { NotificationService } from "app/_services/notification.service";
import Swal from 'sweetalert2';
const BACKEND_URL = environment.apiUrl + "/user";

@Injectable({ providedIn: "root" })

export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userID: string;
  private authStatusListener = new Subject<boolean>();
  // private url = new BehaviorSubject<string>(null);
  // currentUrl = this.url.asObservable();

  constructor(private http: HttpClient, private router: Router,public notificationService: NotificationService) {}
  
  getToken() {
    return this.token;
  }

  // getCurrent(newurl){
  //   this.url.next(newurl); 
  // }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userID;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

//   createUser(email: string, password: string) {
//     const authData: AuthData = { email: email, password: password };
//     this.http.post(BACKEND_URL + "/signup", authData).subscribe(
//       () => {
//         this.router.navigate(["/"]);
//       },
//       error => {
//         this.authStatusListener.next(false);
//       }
//     );
//   }

// Stafflogin(email: string, password: string) {
//   const authData: AuthData = { email: email, password: password };
//   this.http
//     .post<{ token: string; expiresIn: number; }>(
//       BACKEND_URL + "/staff/staff-login",
//       authData
//     )
//     .subscribe(
//       response => {
//         const token = response.token;
//         localStorage.setItem("token", token);
//         // this.saveAuthData(token);
//         this.router.navigate(['/staff/staff-dashboard']);
//         // if (token) {
//         //   const expiresInDuration = response.expiresIn;
//         //   this.setAuthTimer(expiresInDuration);
//         //   this.isAuthenticated = true;
//         //   this.userID = response.userID;
//         //   this.authStatusListener.next(true);
//         //   const now = new Date();
//         //   const expirationDate = new Date(
//         //     now.getTime() + expiresInDuration * 1000
//         //   );
//         //   console.log(expirationDate);
//         //   this.saveAuthData(token, expirationDate, this.userID);
//         //   this.router.navigate(["/"]);
//         // }
//       },
//       error => {
//         Swal.fire({
//           text: 'Username or password is incorrect Please Check!',
//           buttonsStyling: false,
//           confirmButtonClass: "btn btn-success"
//         });          
//         this.authStatusListener.next(false);
//       }
//     );
// }

  Adminlogin(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number; }>(
        BACKEND_URL + "/admin/login",
        authData
      )
      .subscribe(
        response => {
          const token = response.token;
          localStorage.setItem("token", token);
          // this.saveAuthData(token);
          this.router.navigate(['/admin/dashboard']);
          // if (token) {
          //   const expiresInDuration = response.expiresIn;
          //   this.setAuthTimer(expiresInDuration);
          //   this.isAuthenticated = true;
          //   this.userID = response.userID;
          //   this.authStatusListener.next(true);
          //   const now = new Date();
          //   const expirationDate = new Date(
          //     now.getTime() + expiresInDuration * 1000
          //   );
          //   console.log(expirationDate);
          //   this.saveAuthData(token, expirationDate, this.userID);
          //   this.router.navigate(["/"]);
          // }
        },
        error => {
          Swal.fire({
            text: 'Username or password is incorrect Please Check!',
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          });          
          this.authStatusListener.next(false);
        }
      );
  }
  // autoAuthUser() {
  //   const authInformation = this.getAuthData();
  //   if (!authInformation) {
  //     return;
  //   }
  //   const now = new Date();
  //   const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
  //   if (expiresIn > 0) {
  //     this.token = authInformation.token;
  //     this.isAuthenticated = true;
  //     this.userID = authInformation.userID;
  //     this.setAuthTimer(expiresIn / 1000);
  //     this.authStatusListener.next(true);
  //   }
  // }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userID = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['']);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate?: Date, userID?: string) {
    localStorage.setItem("token", token);
    // localStorage.setItem("expiration", expirationDate.toISOString());
    // localStorage.setItem("userID", userID);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    // localStorage.removeItem("expiration");
    // localStorage.removeItem("userID");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    if(!token) {
      return;
    }
    // const expirationDate = localStorage.getItem("expiration");
    // const userID = localStorage.getItem("userID");
    // if (!token || !expirationDate) {
    //   return;
    // }
    return {
      token: token,
      // expirationDate: new Date(expirationDate),
      // userID: userID
    };
  }
}