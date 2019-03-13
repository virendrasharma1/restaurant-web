import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {Router} from '@angular/router';
import {DataStorageService} from '../../../services/datastorage.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  itemList: any = [];
  itemNameList: any = [];
  panelOpenState: any = false;
  constructor(private appService: AppService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private formBuilder: FormBuilder) {
    this.getAllItems();
  }

  ngOnInit() {
  }

  getAllItems() {
    this.appService.get('/items/types')
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.itemList = JSON.parse(data.payload);
          for (let i = 0 ; i < this.itemList.length; i ++) {
            this.itemList[i].panelOpenState = false;
          }
        }
      });
  }

  getItemNamesFromType(itemType, index) {
    this.appService.get('/item/names?type=' + itemType)
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          this.itemList[index].itemNameList = JSON.parse(data.payload);
        }
      });
  }
}
