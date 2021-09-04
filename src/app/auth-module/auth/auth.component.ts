import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hidePassword = true;
  registering = false;

  formTexts = {
    loginTitle: 'გაიარე ავტორიზაცია',
    registerTitle: 'დარეგისტრირდი',
    loginButtonLabel: 'ავტორიზაცია',
    registerButtonLabel: 'რეგისტრაცია'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
