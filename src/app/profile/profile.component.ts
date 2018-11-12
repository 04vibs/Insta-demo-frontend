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
 profileImage;
path;
  constructor(private profileService: ProfileService) {
    this.form = new FormGroup ({
      file1: new FormControl('')
  });
  }


  ngOnInit() {
     this.getprofileimages();
  }

  getprofileimages() {
    const id = localStorage.getItem('id');
    this.profileService.getprofileimages(id)
      .subscribe(response => {
        console.log(response);
        this.path = response[0].imagepath;
        console.log(this.path);
      // const path1 = path.toString('ascii');
     //   console.log(path1);
      });
  }

  postprofileimages(event) {

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
      this.getprofileimages();
    });
  }
}
