import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string = 'https://localhost:7131/api/Library/';
  constructor(private http: HttpClient) { }

  register(user:any){
   return this.http.post(this.baseUrl +'Register' ,user,{
      responseType: 'text'
    } )
  }

  login(info:any){
    let params = new HttpParams()
    .append('email', info.email)
    .append('password', info.password)

    return this.http.get(this.baseUrl + 'Login', {
      params: params,
      responseType: 'text',
    });
  }
}
