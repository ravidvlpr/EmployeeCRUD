import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    formData:login;
    constructor(private http:HttpClient){   }
    getUsers()
    {
      return this.http.get<login[]>('./assets/db.json');
    }

}