import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 image: File;
 form;
  constructor(private profileService: ProfileService) {
    this.form = new FormGroup ({
      file1: new FormControl('')
  });
  }

  ngOnInit() {
    // this.getprofileimages();
  }

  getprofileimages() {
    const id = localStorage.getItem('id');
    this.profileService.getprofileimages(id)
      .subscribe(response => {
        console.log(response);
      });
  }

  postprofileimages(event) {
    console.log();
    const id = localStorage.getItem('id');
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //     console.log('done');
      //     this.image = file;
      //   };
      this.image = file;
      }
  }
  onSubmit() {
    console.log('submit', this.image);
    console.log(this.image);
    this.profileService.postprofileimages(this.image).subscribe(data => {
      console.log(data);
    });
  }
}
