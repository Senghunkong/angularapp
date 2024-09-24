import { Component, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import { RoleService } from 'src/app/Services/role.service';
import { StafflistsService } from 'src/app/Services/stafflists.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  getstafflist : any;

  dtOptions : ADTSettings ={};
  dtTrigger = new Subject<ADTSettings>();
  /**
   *
   */
  constructor(private getstaff : StafflistsService) {

    //super();
    
  }


  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   this.getstaffs();
  }

  getstaffs()
  {
  
     // console.log("He.")
     let obj : any;

     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };


     this.getstaff.getstafflist().subscribe((res)=>
     {
      obj = res ;
      this.getstafflist = obj.results;
      this.dtTrigger.next(this.dtOptions);

     }




     )
   

  }


}
