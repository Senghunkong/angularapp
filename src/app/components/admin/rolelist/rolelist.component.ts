import { Component, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject, using } from 'rxjs';
import { RoleService } from 'src/app/Services/role.service';
import { ToastrService, ToastToken } from 'ngx-toastr'
import { ToastServicesService } from 'src/app/Services/toast-services.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { __makeTemplateObject } from 'tslib';
declare const $: any;


@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {
  rolelist: any;
  dateTime: Date = new Date();
  now: number = this.dateTime.getTime();
  boolview: boolean = false;
  boolupdate: boolean = false;
  booldelete: boolean = false;
  booladd: boolean = false;
  role_id: string = "";
  role_name: string = "";
  dtOptions: ADTSettings = {};
  dtTrigger = new Subject<ADTSettings>();
  constructor(private roleSerive: RoleService, private toastrSV: ToastServicesService) {

  }
  ngOnInit(): void {

    this.getrolelist();

  }

  AddNewbtn() {
    // this.toastrSV.success("Good","Success Record :"+this.now);
    this.Actionstatus('a');

    //console.log()
  }
  // Updatebtn()
  // {
  //   this.Actionstatus('u');

  // }
  // Deletebtn()
  // {
  //   this.Actionstatus('d');

  // }
  // Viewbtn()
  // {
  //   this.Actionstatus('v');


  // }

  SaveRole() {

    let data = {

      role_id: this.role_id,
      role_name: this.role_name

    }
    //console.log(this.roleSerive);
    let obj: any

    //this.toastrSV.Messagebox("Succussed" ,"TestMassageBox")
    this.roleSerive.addrole_list(data).subscribe((res: any) => {
      console.log(res.status);

      if (res.status === "Succussed") {
        this.getrolelist();
        this.toastrSV.Messagebox(res.status, res.message)
      }
    }
    );
  }

  viewfunction(roleid: any, status: string) {

    this.Actionstatus(status);
    let data = {
      role_id: roleid
      // role_name : this.role_name

    }
    this.roleSerive.rolelist_byID(data).subscribe((res: any) => {
      //console.log(res.status)
      if (res.status === "Successed") {
        this.role_id = res.results[0].role_id
        this.role_name = res.results[0].role_name

      } else {
        this.toastrSV.Messagebox("Warning", res.massage);
      }
    });
  }
  UpdateRolefunction(rolename: any, status: string) {

    let data = {

      role_id: this.role_id,
      role_name: this.role_name

    }

    this.roleSerive.editrole_list(data).subscribe((res: any) => {
      let msg = res.message;
      console.log(res)
      if (res.status === "Succussed") {
        this.toastrSV.Messagebox(res.stutus, msg)
        this.getrolelist()

      } else {
        this.toastrSV.Messagebox(res.status, msg)

      }

    })
  }
  DeleteRoleFunction(roleId: any, status: string) {
    this.Actionstatus(status);
    let data = {
      role_id: roleId,
      role_name: this.role_name
    }
    this.roleSerive.deleterole_list(data).subscribe((res: any) => {
      let msg = res.message;
      //  console.log('Message: '+ msg)
      // console.log(res)
      if (res.status === "Succussed") {
        //this.role_id = res.results[0].role_id;
        //this.role_name = res.results[0].role_name
        this.getrolelist();
        this.toastrSV.Messagebox(res.status, msg)
      } else {
        this.toastrSV.Messagebox(res.status, res.massage)
      }

    });



  }
  Actionstatus(status: string) {
    // console.log(status);

    if (status === "v") {
      this.boolview = true
      this.boolupdate = false;
      this.booldelete = false;
      this.booladd = false;
    } else if (status === "d") {
      this.boolupdate = false;
      this.booldelete = true;
      this.boolview = false;
    } else if (status === "u") {
      this.booldelete = false;
      this.boolupdate = true;
      this.boolview = false;
    } else if (status === "a") {
      this.booldelete = false;
      this.boolupdate = false;
      this.boolview = false;
      this.booladd = true;
    }

  }

  destroyData() {

    // if ($.fn.dataTable.isDataTable('#Rolelist')) {
    //   var table = $('#Rolelist').DataTable();
    //   console.log(table)
    // } else {
    //   var table = $('#Rolelist').DataTable({
    //     // Your initialization options here
    //   });
    // }

       if($.fn.dataTable.isDataTable('#Rolelist')){
      $('#Rolelist').dataTable().fnDestroy();
      }


  }
  getrolelist() {
    //  if($.fn.dataTable.isDataTable('Rolelist')){
    //   $('').dataTable().fnDestroy();
    //   }


    this.destroyData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };
    // console.log("He.")
    let obj: any;
    //console.log(this.roleSerive);
    this.roleSerive.getrole_list().subscribe((res) => {
      obj = res;
      this.rolelist = obj.results;
      this.dtTrigger.next(this.dtOptions);

    },
    );
    this.clearData();
  }

  clearData() {
    this.role_id = "";
    this.role_name = "";
  }


  confirmationMsg(roleid:any,status:string)
  {
    console.log
    this.Actionstatus(status);
    this.toastrSV.Messagebox("Successed",roleid + status)


  }

}
