import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hidePassword = true;
  registering = false;

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  });

  formTexts = {
    loginTitle: 'გაიარე ავტორიზაცია',
    registerTitle: 'დარეგისტრირდი',
    loginButtonLabel: 'ავტორიზაცია',
    registerButtonLabel: 'რეგისტრაცია'
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userForm.value);
    if (this.registering) {
      this.authService.register(this.userForm.value).subscribe((value) => {
        console.log(value);
      });
    } else {
      this.authService
        .login(
          this.userForm.controls['userName'].value,
          this.userForm.controls['password'].value
        )
        .subscribe((value) => {
          console.log(value);
        });
    }
  }
}
