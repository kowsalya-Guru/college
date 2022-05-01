import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";
const BACKEND_URL = environment.uploadUrl + "/admin";

@Injectable({ providedIn: "root" })
export class EventService {

  private componentStatusListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(public http: HttpClient, public router: Router) {} 

  fileEvent(data: any) {
    return this.http.post<any>(`${BACKEND_URL}/event`, data);
  }

  fileEventInsert(data: any) {
    return this.http.post<any>(`${BACKEND_URL}/event/insert`, data);
  } 

  fileEventView() {
    return this.http.get<any>(`${BACKEND_URL}/event/view`);
  }
}