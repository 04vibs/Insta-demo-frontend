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
 key = '6LfrFvEZAAAAAD4GtsN2ie6vVy9q9Zka_ga2rEgh';
 captchaResponse: string;

  constructor(
    private loginService: LoginService,
    private router: Router ) { }
users: any;
  ngOnInit() {
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaResponse = captchaResponse;
}
  validate(f) {
    console.log('www', f.value.password);
    this.resolved(this.captchaResponse);
    this.disable = !(f.value.email !== '' && f.value.email !== null) ||
     !(f.value.password !== '' && f.value.password !== null);
  }
  login(f) {
    console.log(f);
    console.log(f.value.email);
    console.log(f.value.password);
    const user = {
      email: f.value.email,
      password: f.value.password
    };
    this.loginService.getUserdata(user)
      .subscribe(response => {
        this.users = response;
        console.log(this.users);
        if ( this.users !== null) {
          localStorage.setItem('id', this.users.id);
          localStorage.setItem('email', this.users.email);
          this.router.navigate(['profile']);
        } else {
          alert('email id or password does not match');
        }
      });

  }

}
