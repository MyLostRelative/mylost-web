import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './modules/shared/shared.module';
import { AuthService } from './common/auth.service';
import { AuthApi } from './common/auth.api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './common/user.service';
import { UserApi } from './common/user.api';
import { AdsService } from './modules/dashboard/ads.service';
import { AdsApi } from './modules/dashboard/ads.api';

@NgModule({
declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthApi,
    AdsService,
    AdsApi,
    UsersService,
    UserApi,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
