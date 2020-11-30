import { ProfileService } from './services/profile.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SignupService } from './services/signup.service';
import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    RecaptchaModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    LoginService,
    SignupService,
    ProfileService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
