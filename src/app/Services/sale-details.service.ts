import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleDetailsService {

  constructor(private http : HttpClient ) { }


  getsaledetailbyid(data:any)
  {
    return this.http.post("http://localhost:5219/GetSaleDetailById",data)

  }
}
