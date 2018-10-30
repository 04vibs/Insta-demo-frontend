import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 disable = true;
  constructor(
    private loginService: LoginService,
    private router: Router ) { }
users: any;
  ngOnInit() {
  }

  validate(f) {
    console.log('www', f.value.password);
    this.disable = !(f.value.email !== '' && f.value.email !== null) || !(f.value.password !== '' && f.value.password !== null);
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
             this.router.navigate(['profile']);
             break;
           } else {
            this.router.navigate(['welcome']);
           }
         }
      });

  }

}
