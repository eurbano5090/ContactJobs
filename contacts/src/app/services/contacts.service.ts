import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  apiUrl= 'http://localhost:9097/api/';

  constructor(private service:HttpClient) { }

  getContacts():Observable<any>{
    return this.service.get(this.apiUrl);
  }

  getContactById(id: string):Observable<any>{
    return this.service.get(this.apiUrl+ '/' +id);
  }

  getContactByBrand(empresa: string):Observable<any>{
    return this.service.get(this.apiUrl+ '/empleados/' + empresa);
  }
}
