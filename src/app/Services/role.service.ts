import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor( private http: HttpClient) { }

  getrole_list()
  {
    return this.http.get('http://senghun-001-site1.jtempurl.com/Roles')
  }

  rolelist_byID(data:any)
  {
    return this.http.post('http://senghun-001-site1.jtempurl.com/Rolesbyid',data)
    //return this.http.post('http://localhost:5219/Rolesbyid',data)

  }
  
  addrole_list(data :any)
  {
    return this.http.post('http://senghun-001-site1.jtempurl.com/Add_Roles',data)
  }
  
  editrole_list(data:any)
  {
    return this.http.post('http://senghun-001-site1.jtempurl.com/Edit_Roles',data)
  }
  deleterole_list(data:any)
  {
    return this.http.post('http://senghun-001-site1.jtempurl.com/Delete_Roles',data)
  }




}
