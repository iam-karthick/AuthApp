import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private registerUrl ="http://localhost:3000/api/register";
  private loginUrl ="http://localhost:3000/api/login";

  constructor(private http: HttpClient,private router:Router) { }

  RegisterUser(user){
    return this.http.post<any>(this.registerUrl,user)
  }
  LoginUser(user){
    return this.http.post<any>(this.loginUrl,user)
  }
  public LoggedInAuthenticate():boolean{
    return !!localStorage.getItem('token')
  }
  LogoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  GetToken(){
    return localStorage.getItem('token');
  }

}
