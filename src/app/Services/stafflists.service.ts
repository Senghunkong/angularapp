import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StafflistsService {

  constructor(private http : HttpClient) { }

  getstafflist()
  {
    return this.http.get("https://senghun-001-site1.jtempurl.com/stafflists")
  }
}
