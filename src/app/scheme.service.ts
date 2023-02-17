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
}
