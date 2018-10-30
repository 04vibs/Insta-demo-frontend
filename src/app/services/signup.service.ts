import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000/api/signup';

  Post(users) {
    return this.http.post(this.baseurl, users);
  }

}
