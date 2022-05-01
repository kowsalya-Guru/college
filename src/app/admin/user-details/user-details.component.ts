import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { AuthService } from 'app/pages/pages.service';
import { NotificationService } from 'app/_services/notification.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { UserDetailService } from './user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  // districts = [];
  // cities = [];
  submitted: Boolean;
  userForm: FormGroup; 
  userID: any;
  componentStatusSub: any;
  btnObj = [
    { label: "Create", method: "onCreate" },
    { label: "Save", method: "onSave" }
  ];
  btnButton: any;
  // city_filename = 'city.xlsx'
  json_excelData: any;
  // fileName: string;
  // closeResult = '';
	// modalReference: any;
  // _existdistrict = [];
  // modal_saveFlag: boolean;
  loading: boolean;
  desOption: String[] = ["Student", "Staff"];
  desSelected: String = this.desOption[0];
  user = [];

  constructor(private formBuilder: FormBuilder, public location: Location, private modalService: NgbModal,private userService: UserDetailService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    // this.modal_saveFlag = false;
    this.btnButton = this.btnObj[0];
    this.submitted = false;
    // this.modal_saveFlag = false;
    // this.fileName = undefined;
    

    this.userForm = this.formBuilder.group({
      designation: [null, Validators.required],
      code: [null, Validators.required],
      name: ['', Validators.required],
    });
    
    this.dtOptions = {
      lengthMenu: [100, 200, 400, 800],
      data: this.user,
      columns: [{
				title: 'S.NO',
				render: function(data: any, type: any, row: any, meta: any) {
				  return meta.row + 1;
				}
			}, {
        title: 'Designation',
        defaultContent: ' - ',
        data: 'designation'
      }, {
        title: 'Code',
        defaultContent: ' - ',
        data: 'code'
      }, {
        title: 'Name',
        defaultContent: ' - ',
        data: 'name'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          const self = this;
          return '<button class="btn btn-link btn-warning btn-icon btn-sm edit"><i class="fa fa-pencil"></i></button>&nbsp;'+
                  '<button class="btn btn-link btn-danger btn-icon btn-sm delete"><i class="fa fa-trash"></i></button>';
        }
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('.edit', row).off('click');
        $('.edit', row).on('click', () => {
          this.edit(data);
        });
        $('.delete', row).off('click');
        $('.delete', row).on('click', () => {
          this.delete(data);
        });
        return row;
      }
    }

    this.userService.readUserDetails("?active=true")
    .then(user_res => {
      this.user = user_res;
      console.log(this.user);
      
      this.dtOptions.data = this.user;
      this.dtTrigger.next();
    })
    .catch(err => {
      console.log(err);
    });
    // this.dtOptions.data = this.user;
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  get userControl() {
    return this.userForm.controls;
  }

  refreshTable(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();    
      this.ngOnInit();
    });
  }

  back(): void {
    this.location.back();
  }

  onCreate(): void {
    if(this.userForm.invalid){
      this.submitted = true;      
      return;
    } else { 
      this.loading = true;
      this.userService.createUserDetails(this.userForm.value)
      .then(city_res => {
        this.loading = false;
        this.notificationService.success_notify('Data created successfully.');
        this.refreshTable();
      })
      .catch(err => {
        this.loading = false;
        console.log(err);
        let _msg = '';
        if(err.error.errors) {
          if(err.error.errors.name) _msg += err.error.errors.name.message;
          if(err.error.errors.code) _msg += err.error.errors.code.message;
          if(err.error.errors.designation) _msg += err.error.errors.designation.message;
        } else {
          _msg = err.statusText;
        }
        
      });
    }
  }

  edit(data) {
    this.btnButton = this.btnObj[1];
    this.userForm.patchValue({ 
      designation: data.designation,
      code: data.code,
      name : data.name
    })
    this.userID = data._id
  }

  onSave(): void {
    if(this.userForm.invalid){
      this.submitted = true;      
      return;
    } else { 
      this.loading = true;
      this.userService.updateUserDetails(this.userID, this.userForm.value) // updating from the server side 
        .then(() => {
          this.loading = false;
          this.notificationService.success_notify('Data saved successfully.');
          this.refreshTable();
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          let _msg = '';
          if(err.error.errors) {
            if(err.error.errors.name) _msg += err.error.errors.name.message;
            if(err.error.errors.code) _msg += err.error.errors.code.message;
            if(err.error.errors.designation) _msg += err.error.errors.designation.message;
          } else {
            _msg = err.statusText;
          }
          Swal.fire({
            text: _msg,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          });
        });
    }  
  }

  delete(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes, delete it!',
       buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUserDetails(data._id).then(()=>{
          Swal.fire(
            {
              title: 'Deleted!',
              text: data.name + ' has been deleted.',
              type: 'success',
              confirmButtonClass: "btn btn-success",
              buttonsStyling: false
            }
          )
          this.refreshTable();
        }).catch(err =>{
          Swal.fire({
            title: err.statusText,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          });
        });
      }
    })
  }  

}

