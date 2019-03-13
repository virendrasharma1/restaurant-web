import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {Router} from '@angular/router';
import {DataStorageService} from '../../../services/datastorage.service';
import {FormBuilder} from '@angular/forms';
import {RestaurantOrdersBO} from '../../../bo/restaurantorders.bo';
import {OrderDetailsBO} from '../../../bo/orderdetails.bo';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  restaurantItemList: any = [];
  orderDetails: any = [];
  totalOrderCost = 0;
  restaurantId: any;
  restaurantOrdersBO: any;

  constructor(private appService: AppService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.restaurantId = this.appService.checkSessionValidity();
    this.getRestaurantItems();
  }

  ngOnInit() {
  }

  getRestaurantItems() {
    this.appService.get('/items/types')
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.restaurantItemList = JSON.parse(data.payload);
          for (let i = 0; i < this.restaurantItemList.length; i++) {
            this.restaurantItemList[i].panelOpenState = false;
          }
        }
      });
  }

  getItemNamesFromType(item, itemType, index) {
    if (isNullOrUndefined(item.itemNameList)) {
      this.appService.get('/item/names?type=' + itemType)
        .subscribe(data => {
          if (data.appStatusCode === 0) {
            this.restaurantItemList[index].itemNameList = JSON.parse(data.payload);
            for (let i = 0; i < this.restaurantItemList[index].itemNameList.length; i++) {
              this.restaurantItemList[index].itemNameList[i].count = 0;
              this.restaurantItemList[index].itemNameList[i].totalCost = 0;
            }
          }
        });
    }
  }

  addCount(mainListIndex, subListIndex) {
    if (this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count < 10) {
      this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count += 1;
      this.restaurantItemList[mainListIndex].itemNameList[subListIndex].totalCost = this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count * this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost;
      this.getTotalCost('add', parseFloat(this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost));
      this.updateOrderList('add', this.restaurantItemList[mainListIndex].itemNameList[subListIndex]);
    }
  }

  minusCount(mainListIndex, subListIndex) {
    if (this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count > 0) {
      this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count -= 1;
      this.restaurantItemList[mainListIndex].itemNameList[subListIndex].totalCost = this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count * this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost;
      this.getTotalCost('substract', parseFloat(this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost));
      this.updateOrderList('substract', this.restaurantItemList[mainListIndex].itemNameList[subListIndex]);
    }
  }

  getTotalCost(type, value) {
    if (type === 'add') {
      this.totalOrderCost += value;
    } else if (type === 'substract' && this.totalOrderCost !== 0) {
      this.totalOrderCost -= value;
    }
  }

  updateOrderList(type, orderDetail) {
    const restaurantOrdersBO = new RestaurantOrdersBO();
    restaurantOrdersBO.restaurantId = this.restaurantId;
    restaurantOrdersBO.totalCost = this.totalOrderCost;
    if (type === 'add') {
      const orderDetailsBO = new OrderDetailsBO();
      orderDetailsBO.numberOfItems = orderDetail.count;
      orderDetailsBO.itemId = orderDetail.itemId;
      orderDetailsBO.totalCost = orderDetail.totalCost;
      this.orderDetails.push(orderDetailsBO);
    } else if (type === 'substract') {
      const orderDetailsBO = new OrderDetailsBO();
      orderDetailsBO.numberOfItems = orderDetail.count;
      orderDetailsBO.itemId = orderDetail.itemId;
      orderDetailsBO.totalCost = orderDetail.totalCost;
      const obj = this.orderDetails.find(orderDetailsBO => orderDetailsBO.itemId === orderDetail.itemId);
      const a = this.orderDetails.indexOf(obj);
      this.orderDetails.splice(a, 1);
      if (orderDetail.count !== 0) {
        this.orderDetails.push(orderDetailsBO);
      }
    }
    restaurantOrdersBO.orderDetailsBOS = this.orderDetails;
    this.restaurantOrdersBO = restaurantOrdersBO;
  }

  saveOrder() {
    if (this.totalOrderCost !== 0) {
      this.appService.post('/order', this.restaurantOrdersBO)
        .subscribe(data => {
          if (data.appStatusCode === 0) {
            this.router.navigate(['landing/myorders']);
          }
        });
    } else {
      alert('Total Amount can not be zero');
    }
  }
}
