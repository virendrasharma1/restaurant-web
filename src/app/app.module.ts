import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './non-authenticated/sign-in/sign-in.component';
import {routing} from './app.routing';
import { RegisterComponent } from './non-authenticated/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
