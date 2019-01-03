import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './non-authenticated/launch/sign-in/sign-in.component';
import {routing} from './app.routing';
import { RegisterComponent } from './non-authenticated/launch/register/register.component';
import { LaunchComponent } from './non-authenticated/launch/launch.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
