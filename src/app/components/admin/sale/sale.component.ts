import { Component, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { ToastrService } from 'ngx-toastr';
import { retryWhen, Subject, Timestamp } from 'rxjs';
import { DeletSaleService } from 'src/app/Services/delet-sale.service';
import { ProductService } from 'src/app/Services/product.service';
import { SaleDetailsService } from 'src/app/Services/sale-details.service';
import { SalelistService } from 'src/app/Services/salelist.service';
import { SalelistbyidService } from 'src/app/Services/salelistbyid.service';
import { ToastServicesService } from 'src/app/Services/toast-services.service';
//import { ProductService } from 'src/app/Services/product.service';

declare const $:any

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements  OnInit {
  reviewsaleid :any
  reviewCustid :any
  reviewsaleDate : any
  salelist : any
  saledetails :any
  sale_id : string ="";
  customer_id: string ="";
  product_name : String ="";
  Qty :any;
  unit_prices : any ;
  production_id:any
  saledate : any;
  boolview :boolean =false;
  dtOptions: ADTSettings = {};
  dtTrigger = new Subject<ADTSettings>();
  constructor(private productSV : ProductService ,
     private toastSV : ToastServicesService ,
     private productlistsv : ProductService,
    // private salelistSV:SalelistService, 
     private saleDetailbyidSV : SaleDetailsService ,
    private salelistbyidSV : SalelistbyidService,
  private deletesaleSV:DeletSaleService){
  }
  ngOnInit(): void {
    this.getproduct()
    this.getsalelist()
  }
   productlist :any
   itemslist : any=[]
  getproduct()
  {
    this.productSV.getProduct().subscribe((res:any)=>
    {
      console.log(res.result)
      console.log("here is message console :"+res.result[0])
       if(res.status==="Succussed")
       {
        this.productlist = res.result
        
       }
    })
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
  getsaledailsbyid(sale_i:any)
  {
    console.log("GetsaledetailActivated :"+sale_i)
    let data={
      sale_id:sale_i
    }
    this.reviewsaleid = sale_i
    console.log("here is RVID :" +this.reviewsaleid)
    this.saleDetailbyidSV.getsaledetailbyid(data).subscribe((res:any)=>
    {
      //console.log(res.result)
      if(res.status==="Succussed")
      {
        this.saledetails = res.result
    
        

      }
   

    });
    this.salelistbyidSV.getsalelistbyid(data).subscribe((res:any)=>
    {
      console.log(res.result[0].sale_date)
    
     
      if(res.status==="Succussed")
      {
        this.reviewCustid = res.result[0].customer_id
       this. reviewsaleDate =res.result[0].sale_date
      }
    })
  }
  getsalelist()
  {
    this.destroyData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };

    // this.salelistSV.getSaleList().subscribe((res :any) =>
    // {
    //   //console.log(res)
     
    //   if(res.status==="Succussed")
    //   {
    //     this.salelist = res.result;
    //     this.dtTrigger.next(this.dtOptions);
    //   }

    // }
    // )
  
  }

  Additem(){
    let items={
      production_id : this.production_id,
      //product_name : this.product_name,
      qty : this.Qty,
      unit_price :this.unit_prices
    }
    this.itemslist.push(items)
    console.log(this.itemslist)
  }

  DeleteSale(sale_id:any)
  {
    let data ={
      sale_id:sale_id
  
    }
    this.deletesaleSV.deleteSale(data).subscribe((res:any)=>
    {
      if(res.status==="Succussed")
      {
        this.toastSV.Messagebox(res.status,res.message);
        this.getsalelist()
      }


    })
  }
  clearData()
  {
    this.sale_id="";
    this.customer_id="";
    this.itemslist ="";


  }

  Addsale()
  {
    //this.clearData();
    //console.log("Here is Itemslist console"+this.itemslist.product_id);
    var jsonfile = JSON.stringify(this.itemslist)
 
    let data = {
      sale_id : this.sale_id,
      customer_id : this.customer_id,
      sale_date : this.saledate,
      saledetailrequests : this.itemslist

    }
   // console.log('Here is logData'+ jsonfile);
   // console.log('Here is data file'+ JSON.stringify(data))
    this.productSV.addSale(data).subscribe((res:any)=>
    {
    //console.log('here is first console'+ JSON.stringify(res))
    console.log(res)
      if(res.status==="Succussed")
      {
        this.toastSV.Messagebox(res.status,res.message);
        this.getsalelist()
      }

    }
    );

  }
}
