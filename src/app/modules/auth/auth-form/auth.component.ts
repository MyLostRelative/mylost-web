import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
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
    username: new FormControl(''),
    password: new FormControl('')
  });

  formTexts = {
    loginTitle: 'გაიარე ავტორიზაცია',
    registerTitle: 'დარეგისტრირდი',
    loginButtonLabel: 'ავტორიზაცია',
    registerButtonLabel: 'რეგისტრაცია'
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    let tokenObservable: Observable<any>;
    if (this.registering) {
      tokenObservable = this.authService.register(this.userForm.value);
    } else {
      tokenObservable = this.authService.login(
        this.userForm.controls['username'].value,
        this.userForm.controls['password'].value
      );
    }
    tokenObservable.subscribe(async (tokenObj) => {
      const { access_token } = tokenObj;
      if (access_token) {
        localStorage.setItem('token', access_token);
        localStorage.setItem('isLoggedIn', 'true');
        await this.authService.getClientDetails();
        if (this.authService.clientInfo) {
          this.authService.loggedIn.next(true);
          this.router.navigate([''], {state: {loggedIn: true}});
        } else {
          console.log('err');
        }
      }
    });
  }
}
