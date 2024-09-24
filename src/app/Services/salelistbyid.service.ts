import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalelistbyidService {

  constructor(private http:HttpClient) { }

  getsalelistbyid(data:any)
  {
    return this.http.post("http://localhost:5219/GetSaleById",data)
  }
}
