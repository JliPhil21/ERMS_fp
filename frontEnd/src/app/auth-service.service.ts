import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
  constructor(private httpClient:HttpClient) { }

  signin(username:any, password:any):Observable<any>{
    console.log("SAD")
    return this.httpClient.post(environment.apiUrl+'/users/login', username, password);
  }

}
