import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";
const BACKEND_URL = environment.uploadUrl + "/admin";

@Injectable({ providedIn: "root" })
export class TaskService {

  private componentStatusListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {} 

  fileupload(data: any) {
    return this.http.post<any>(`${BACKEND_URL}/upload`, data);
  }


  fileuploadInsert(data: any) {
    return this.http.post<any>(`${BACKEND_URL}/upload/insert`, data);
  } 

  fileuploadView() {
    return this.http.get<any>(`${BACKEND_URL}/upload/view`);
  }
}