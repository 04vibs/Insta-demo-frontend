import { Route, Router } from '@angular/router';
import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  disable = true;
  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  validate(f) {
    console.log('www', f.value.password);
    this.disable = !(f.value.emailID !== '' && f.value.emailID !== null) ||
    !(f.value.password !== '' && f.value.password !== null) ||
    !(f.value.username !== '' && f.value.username !== null) ;
  }
  ngOnInit() {
  }

  signup(f) {
    console.log(f);
    const users = {
      name: f.value.username,
      password: f.value.password,
      email: f.value.emailID,
    };
    console.log(users);
    this.signupService.Post(users)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['profile']);

    });

  }

}
