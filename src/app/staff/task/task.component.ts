import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  uploadedFiles: any = [];
  filesData: any = [];
  uploadData: any = [];
  imageSrc: any[] = [];
  insertdata: [{
    file_name: '',
    path: '',
    type: ''
  }] ;

  constructor(public dataService: TaskService, public location: Location) { }

  ngOnInit(): void {
  }

}
