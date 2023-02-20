import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scheme } from './scheme';
import { Observable } from 'rxjs';

const baseurl = "http://localhost:12010/Api/Schemes"
@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(private http:HttpClient) { }

  GetUserType():Observable<Scheme[]>
  {
    return this.http.get<Scheme[]>(baseurl+'/GetUserTypes');
  }

  Login(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/Login',data);
  }

  AddTypes(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/AddUserType',data)
  }

  EditSchemeType(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/EditSchemeType',data);
  }

  DeleteSchemeType(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/DeleteSchemeType',data);
  }

  AddScheme(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/AddScheme',data)
  }

  EditScheme(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/EditScheme',data);
  }

  DeleteScheme(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/DeleteScheme',data);
  }

  GetAllSchemes():Observable<Scheme[]>
  {
    return this.http.get<Scheme[]>(baseurl+'/GetAllSchemes');
  }

  GetMembers():Observable<Scheme[]>
  {
    return this.http.get<Scheme[]>(baseurl+'/GetMembers');
  }

  EditMember(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/EditMember',data);
  }

  DeleteMember(data:any):Observable<any>
  {
    return this.http.post(baseurl+'/DeleteMember',data);
  }
}
