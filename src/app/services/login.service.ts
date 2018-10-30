import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/api/login';

  getUserdata() {
    return this.http.get(this.baseUrl);
  }
}
