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
    return this.http.get("http://localhost:5219/Sale");
  }
  addSale(data:any)
  {
    return this.http.post("http://localhost:5219/add_sale",data);
  }
}
