import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getuData() {
    return this.httpClient.get(environment.apiUrl+'/users');
    }
    
    insertuData(data:any) {
      return this.httpClient.post(environment.apiUrl+'/user/add', data);
      }
    
    deleteuData(id:any) {
      return this.httpClient.delete(environment.apiUrl+'/users/'+id);
      }
      getuDataById(id:any) {
        return this.httpClient.get(environment.apiUrl+'/users/'+ id);
        }
      
}
