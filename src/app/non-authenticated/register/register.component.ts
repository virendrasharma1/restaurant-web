import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../../services/app.service';
import {AppConstants} from '../../shared/app.constants';
import {DataStorageService} from "../../services/datastorage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  restaurant: any = {};
  constructor(private router: Router,
              private appService: AppService,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.appService.checkSessionValidity();
    this.createRegisterationForm();
  }

  ngOnInit() {
  }
  createRegisterationForm() {
      this.registrationForm = this.formBuilder.group({
        nameControl: ['', [
          Validators.required,
          Validators.maxLength(128)
        ]],
        emailControl: ['', [
          Validators.required,
          Validators.maxLength(256)
        ]],
        passwordControl: ['', [
          Validators.maxLength(256)
        ]]
      });
  }

  register(restaurant) {
    this.appService.post('/register', restaurant)
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          const restaurantId = JSON.parse(data.payload);
          this.dataStorageService.write(AppConstants.SESSION_RESTAURANT_ID, restaurantId);
          this.router.navigate([AppConstants.LANDING_URL]);
        }
      });
  }
}
