import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletSaleService {

  constructor(private http : HttpClient) { }
  deleteSale(data : any)
  {
    return this.http.post("http://localhost:5219/delete_sale",data)
  }
}
