import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})

export class ToastServicesService {
  constructor(private toastservice:ToastrService) { }
  Messagebox(status:string , message:any)
  {
    console.log("ToastMessage :"+message)

    if(status==="Succussed")
    {
      this.toastservice.success(message,"Information !");
    }else if(status==="Error")
    {
      this.toastservice.error(message,"Information !");
    }else if(status === "Warning" )
    {
      this.toastservice.warning(message,"Information !");
    }
  }
}


