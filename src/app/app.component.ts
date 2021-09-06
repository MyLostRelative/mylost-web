import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (this.isLoggedIn) {
      await this.authService.getClientDetails();
      if (!this.authService.clientInfo) {
        this.authService.logOut();
        this.isLoggedIn = false;
      }
    }

    this.authService.loggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  logOut() {
    this.authService.logOut();
  }
}
