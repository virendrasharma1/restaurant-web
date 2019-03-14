import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {DataStorageService} from '../../services/datastorage.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  restaurant: any = {};

  constructor(private appService: AppService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.getRestaurantProfile();
  }

  ngOnInit() {
  }

  getRestaurantProfile() {
    this.appService.get('/profile')
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.restaurant = JSON.parse(data.payload);
        }
      });
  }

}
