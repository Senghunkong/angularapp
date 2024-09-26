import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalelistService   {

  constructor(private http:HttpClient) { }


  getSaleList()
  {
    return this.http.get("https://senghun-001-site1.jtempurl.com/SaleList");
  }





}
