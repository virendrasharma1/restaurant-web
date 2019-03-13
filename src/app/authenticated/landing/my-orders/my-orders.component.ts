import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {Router} from '@angular/router';
import {DataStorageService} from '../../../services/datastorage.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderList: any = [];
  dateFormat: any;

  constructor(private appService: AppService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.dateFormat =  'dd-MMM-yyyy';
    this.getMyOrders();
  }

  ngOnInit() {
  }

  getMyOrders() {
    this.appService.get('/orders')
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.orderList = JSON.parse(data.payload);
        }
      });
  }

}
