import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  getApi() {
    this.appService.get("hello")
      .subscribe(
        restItems => {
        }
      );
  }
}
