import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct()
  {
    return this.http.get("https://senghun-001-site1.jtempurl.com/Product");
  }
  addSale(data:any)
  {
    return this.http.post("https://senghun-001-site1.jtempurl.com/add_sale",data);
  }
}
