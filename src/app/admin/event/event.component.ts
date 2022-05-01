import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  uploadedFiles: any = [];
  filesData: any = [];
  uploadData: any = [];
  imageSrc: any = [];
  insertdata: [{
    file_name: '',
    path: '',
    type: ''
  }] ;

  constructor(public dataService: EventService,public location: Location) {}
  
  ngOnInit(): void {
    this.dataService.fileEventView().subscribe((item: any) => {
      console.log(item);
      this.uploadData = item.data;
    })
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
  
  fileChange(data: any) {
    this.uploadedFiles = data.target.files;
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
    
    this.dataService.fileEvent(formDatas).subscribe((data: any) => {
      this.filesData = data.uploads;
      this.filesData.map((item: any) => {        
        this.dataService.fileEventInsert(item).subscribe((data: any) => {
          console.log(data);
        })
      })
    });
  }

  back() {
    this.location.back();
  }


}
