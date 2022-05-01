import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ExamService } from './exam-schedule.service';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.css']
})
export class ExamScheduleComponent implements OnInit {
  uploadedFiles: any = [];
  filesData: any = [];
  uploadData: any = [];
  imageSrc: any[] = [];
  insertdata: [{
    file_name: '',
    path: '',
    type: ''
  }] ;

  constructor(public dataService: ExamService, public location: Location) { }

  ngOnInit(): void {
    this.dataService.fileuploadView().subscribe((item: any) => {
      console.log('datas',item);
      this.uploadData = item.data;
    });
  }

  fileChange(data: any) {
    // console.log(data);
    this.uploadedFiles = data.target.files;

  }

  download(data: any,i: any) {
    this.imageSrc = [];    
    let image = data.path.split('/');
    console.log('path',image);
    this.imageSrc[i] = image[3];
    this.downloadMyFile(this.imageSrc[i]);
  }

  downloadMyFile(file: string) {
    const link = document.createElement('a');
    console.log('a',link);
    
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `${environment.uploadUrl}/${file}`);
    
    console.log('set',link);
    
    // link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  public submit() {
    let formDatas = new FormData();

    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formDatas.append(
        'uploads[]',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }
    
    this.dataService.fileupload(formDatas).subscribe((data: any) => {
      
      this.filesData = data.uploads;

      this.filesData.map((item: any) => {        
        this.dataService.fileuploadInsert(item).subscribe((data: any) => {
          console.log(data);
        }) 
      })
      
    });
  }

  back() {
    this.location.back();
  }

}
