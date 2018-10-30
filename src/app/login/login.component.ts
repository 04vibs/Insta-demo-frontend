import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService) { }
users: any;
  ngOnInit() {
  }


  login(f) {
    console.log(f);
    console.log(f.value.email);
    console.log(f.value.password);


    this.loginService.getUserdata()
      .subscribe(response => {
        this.users = response;
        console.log(this.users);


         for (let i = 0 ; i < this.users.length; i++) {
          console.log(this.users[i].email);
           if (this.users[i].email === f.value.email) {
             console.log('User Authorized');
             break;
           }
         }
      });

  }

}
