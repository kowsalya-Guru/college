import { Component, OnInit } from '@angular/core';
import { ExamService } from 'app/admin/exam-schedule/exam-schedule.service';
import { Location } from '@angular/common';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-exam-staff',
  templateUrl: './exam-staff.component.html',
  styleUrls: ['./exam-staff.component.css']
})
export class ExamStaffComponent implements OnInit {
  uploadData: any = [];
  imageSrc: any[] = [];

  constructor(public dataService: ExamService, public location: Location) { }

  ngOnInit(): void {
    this.dataService.fileuploadView().subscribe((item: any) => {
      // console.log('datas',item);
      this.uploadData = item.data;
    });
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
    // console.log('a',link);
    
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `${environment.uploadUrl}/${file}`);
    
    // console.log('set',link);
    
    // link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  back() {
    this.location.back();
  }

}
