import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";
import { CalendarData } from "./calendar.model";
// import { StateData, DistrictData, CityData, CompanyData, ClientData, FinancialYearData } from "./master-data.model";
const BACKEND_URL = environment.apiUrl + "/admin";

@Injectable({ providedIn: "root" })
export class calendarService {

  private componentStatusListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {} 

  createCalendar = async(obj: CalendarData) => new Promise<any>((resolve, rejects) => {
    this.http.post(BACKEND_URL + "/calendar", obj)
    .subscribe(
      response => {
          resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  })

  readCalendar = async(query?: any) => new Promise<any>((resolve, rejects) => {
    this.http.get<any>(BACKEND_URL + "/calendar"+(query ? query :''))
    .subscribe(
      response => {
        resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  })

//   updateUserDetails = async (id, obj:userDetails) => new Promise<any>((resolve, rejects) => {
//     this.http.put<any>(BACKEND_URL + "/userDetails/" + id, obj)
//     .subscribe(
//       response => {
//         resolve(response);
//       },
//       error => {
//         rejects(error);
//       }
//     );
//   })
  
//   deleteUserDetails = async (id) => new Promise<any>((resolve, rejects) => {
//     this.http.delete<any>(BACKEND_URL + "/userDetails/" + id)
//     .subscribe(
//       response => {
//         resolve(response);
//       },
//       error => {
//         rejects(error);
//       }
//     );
//   })

}