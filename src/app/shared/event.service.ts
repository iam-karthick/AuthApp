import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
  private evantsUrl ="http://localhost:3000/api/evants";
  // private loginUrl ="http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }
  UserEvants(){
    return this.http.get<any>(this.evantsUrl);
  }
}
