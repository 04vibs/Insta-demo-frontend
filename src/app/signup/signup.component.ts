import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }

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

    });

  }

}
