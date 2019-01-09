import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  restaurant: any = {};
  constructor(private router: Router, private appService: AppService, private formBuilder: FormBuilder) {
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
      });
  }
}
