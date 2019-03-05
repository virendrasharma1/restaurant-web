import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './non-authenticated/sign-in/sign-in.component';
import {routing} from './app.routing';
import { RegisterComponent } from './non-authenticated/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './services/app.service';
import {DataStorageService} from './services/datastorage.service';
import {LoginService} from './services/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LandingComponent } from './authenticated/landing/landing.component';
import { CreateOrderComponent } from './authenticated/landing/create-order/create-order.component';
import { MyOrdersComponent } from './authenticated/landing/my-orders/my-orders.component';
import { AddItemComponent } from './authenticated/landing/add-item/add-item.component';
import { ViewItemsComponent } from './authenticated/landing/view-items/view-items.component';
import { OrderDetailsComponent } from './authenticated/landing/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LandingComponent,
    CreateOrderComponent,
    MyOrdersComponent,
    AddItemComponent,
    ViewItemsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppService, DataStorageService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
