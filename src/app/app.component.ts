import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/auth.service';
import { ClientInfo } from './common/client-inco.entity';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  clientInfo: ClientInfo;

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (this.isLoggedIn) {
      this.clientInfo = await this.authService.getClientDetails();
      if (!this.clientInfo) {
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
