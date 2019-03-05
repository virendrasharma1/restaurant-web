import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NameValuePairBO} from "../../bo/namevaluepair.bo";
import {Router} from "@angular/router";
import {AppConstants} from "../../shared/app.constants";
import {DataStorageService} from "../../services/datastorage.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  login: any = {};
  constructor(private appService: AppService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.appService.checkSessionValidity();
    this.createLoginForm();
  }

  ngOnInit() {
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      emailControl: ['', [
        Validators.required,
        Validators.maxLength(128)
      ]],
      passwordControl: ['', [
        Validators.required,
        Validators.maxLength(256)
      ]]
    });
  }
  loginRestaurant(login) {
    this.appService.put('/login', new NameValuePairBO(login.emailOrPhone, login.password))
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          const restaurantId = JSON.parse(data.payload);
          this.dataStorageService.write(AppConstants.SESSION_RESTAURANT_ID, restaurantId);
          this.router.navigate([AppConstants.LANDING_URL]);
        }
      });
  }
}
