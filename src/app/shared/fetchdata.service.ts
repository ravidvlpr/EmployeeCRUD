import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }
  getData()
  {
    const url="https://randomuser.me/api/?results=5000";
    return this.http.get<any>(url);
  }
}
