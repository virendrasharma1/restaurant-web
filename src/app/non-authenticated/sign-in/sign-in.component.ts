import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  login: any = {};
  constructor(private appService: AppService,
              private formBuilder: FormBuilder) {
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
  getApi() {
    this.appService.get("hello")
      .subscribe(
        restItems => {
        }
      );
  }
}
