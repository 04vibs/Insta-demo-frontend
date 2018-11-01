import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/api/images/get';

  baseUrl1 = 'http://localhost:3000/api/images/upload';
  getprofileimages(id) {
    console.log(id);
    return this.http.get(this.baseUrl + '/:' + id );
  }

  postprofileimages(image) {
    const id = localStorage.getItem('id');
    console.log(id);
    console.log('==========================================================');
    console.log(image);
    const fd = new FormData();
    fd.append('image', image, image.name);
    console.log('111111111111111111111111111111', fd.get('image'));
    const header = new HttpHeaders({
      'Content-Type': 'form-data'
    });
     return this.http.post(this.baseUrl1 + '/' + id, fd);
  }
}
