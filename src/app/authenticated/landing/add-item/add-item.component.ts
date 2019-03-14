import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {Router} from '@angular/router';
import {DataStorageService} from '../../../services/datastorage.service';
import {FormBuilder, FormGroup, FormGroupName, Validators} from '@angular/forms';
import {RestaurantItemsBO} from '../../../bo/restaurantItems.bo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemList: any = [];
  createItemForm: FormGroup;
  restaurantId: any;
  itemObject: any = {};
  itemNameList: any = [];
  constructor(private appService: AppService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.restaurantId = this.appService.checkSessionValidity();
    this.createAddItemForm();
    this.getAllItems();
  }

  ngOnInit() {
  }

  createAddItemForm() {
    this.createItemForm = this.formBuilder.group({
      itemTypeControl: ['', [
        Validators.required,
        Validators.maxLength(128)
      ]],
      itemNameControl: ['', [
        Validators.required,
        Validators.maxLength(256)
      ]],
      itemCostControl: ['', [
        Validators.required,
        Validators.maxLength(256)
      ]]
    });
  }

  getAllItems() {
    this.appService.get('/all/items/types')
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.itemList = JSON.parse(data.payload);
        }
      });
  }

  getNamesThroughItems(itemType) {
    this.appService.get('/all/item/names?itemType=' + itemType)
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.itemNameList = JSON.parse(data.payload);
        }
      });
  }
  addRestaurantItem(itemObject) {
    const restaurantItemsBO = new RestaurantItemsBO();
    restaurantItemsBO.restaurantId = this.restaurantId;
    restaurantItemsBO.itemType = itemObject.itemType;
    restaurantItemsBO.itemName = itemObject.itemName;
    restaurantItemsBO.itemCost = itemObject.itemCost;
    this.appService.post('/item', restaurantItemsBO)
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.createItemForm.reset();
        }
      });
  }

}
