import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AdminserviceService {

  constructor(private http:HttpClient) { }

baseUrl = 'http://localhost:8086/';

  
  getUserById(userId:number):Observable<any>{
    return this.http.get(this.baseUrl+ "users/" + userId);
  }

  postUser(user:any):Observable<any>{
    return this.http.post(this.baseUrl + "user", user);
  }
  updateUser(userId:number, user:any):Observable<any>{
    return this.http.put(this.baseUrl + "user/update/" + userId, user);
  }

}