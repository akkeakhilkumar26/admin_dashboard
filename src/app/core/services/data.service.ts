import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Structure } from '../models/structure';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://localhost:5555/user_details";

  constructor(private http: HttpClient) {

  }

  details(): Observable<any> {
    return this.http.get("http://localhost:5555/user_details");
  }

  send(temp: Structure): Observable<any> {
    return this.http.post("http://localhost:5555/user_details", temp)
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
