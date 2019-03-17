(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'restaurants-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _non_authenticated_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./non-authenticated/sign-in/sign-in.component */ "./src/app/non-authenticated/sign-in/sign-in.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _non_authenticated_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-authenticated/register/register.component */ "./src/app/non-authenticated/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authenticated_landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authenticated/landing/landing.component */ "./src/app/authenticated/landing/landing.component.ts");
/* harmony import */ var _authenticated_landing_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authenticated/landing/create-order/create-order.component */ "./src/app/authenticated/landing/create-order/create-order.component.ts");
/* harmony import */ var _authenticated_landing_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authenticated/landing/my-orders/my-orders.component */ "./src/app/authenticated/landing/my-orders/my-orders.component.ts");
/* harmony import */ var _authenticated_landing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authenticated/landing/add-item/add-item.component */ "./src/app/authenticated/landing/add-item/add-item.component.ts");
/* harmony import */ var _authenticated_landing_view_items_view_items_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authenticated/landing/view-items/view-items.component */ "./src/app/authenticated/landing/view-items/view-items.component.ts");
/* harmony import */ var _authenticated_landing_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authenticated/landing/order-details/order-details.component */ "./src/app/authenticated/landing/order-details/order-details.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _non_authenticated_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                _non_authenticated_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _authenticated_landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
                _authenticated_landing_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_13__["CreateOrderComponent"],
                _authenticated_landing_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_14__["MyOrdersComponent"],
                _authenticated_landing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_15__["AddItemComponent"],
                _authenticated_landing_view_items_view_items_component__WEBPACK_IMPORTED_MODULE_16__["ViewItemsComponent"],
                _authenticated_landing_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"]
            ],
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _services_datastorage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"], _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _non_authenticated_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./non-authenticated/sign-in/sign-in.component */ "./src/app/non-authenticated/sign-in/sign-in.component.ts");
/* harmony import */ var _non_authenticated_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-authenticated/register/register.component */ "./src/app/non-authenticated/register/register.component.ts");
/* harmony import */ var _authenticated_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated/landing/landing.component */ "./src/app/authenticated/landing/landing.component.ts");
/* harmony import */ var _authenticated_landing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticated/landing/add-item/add-item.component */ "./src/app/authenticated/landing/add-item/add-item.component.ts");
/* harmony import */ var _authenticated_landing_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticated/landing/my-orders/my-orders.component */ "./src/app/authenticated/landing/my-orders/my-orders.component.ts");
/* harmony import */ var _authenticated_landing_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticated/landing/create-order/create-order.component */ "./src/app/authenticated/landing/create-order/create-order.component.ts");
/* harmony import */ var _authenticated_landing_view_items_view_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authenticated/landing/view-items/view-items.component */ "./src/app/authenticated/landing/view-items/view-items.component.ts");
/* harmony import */ var _authenticated_landing_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authenticated/landing/order-details/order-details.component */ "./src/app/authenticated/landing/order-details/order-details.component.ts");









var appRoutes = [
    { path: '', component: _non_authenticated_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"] },
    { path: 'register', component: _non_authenticated_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'landing', component: _authenticated_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        children: [
            { path: 'additem', component: _authenticated_landing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_4__["AddItemComponent"] },
            { path: 'myorders', component: _authenticated_landing_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__["MyOrdersComponent"] },
            { path: 'createorder', component: _authenticated_landing_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrderComponent"] },
            { path: 'viewitems', component: _authenticated_landing_view_items_view_items_component__WEBPACK_IMPORTED_MODULE_7__["ViewItemsComponent"] },
            { path: 'details/:id', component: _authenticated_landing_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"] }
        ] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/authenticated/landing/add-item/add-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/authenticated/landing/add-item/add-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGFuZGluZy9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/authenticated/landing/add-item/add-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/authenticated/landing/add-item/add-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section__content section__content--p30\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12\">\r\n        <form [formGroup]=\"createItemForm\"\r\n              (submit)=\"addRestaurantItem(itemObject)\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Add item</strong>\r\n          </div>\r\n          <div class=\"card-body card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\" class=\" form-control-label\">Select Item Type</label>\r\n              <select name=\"select\" id=\"select\"\r\n                      [(ngModel)]=\"itemObject.itemType\"\r\n                      (change)=\"getNamesThroughItems(itemObject.itemType)\"\r\n                      formControlName=\"itemTypeControl\"\r\n                      class=\"form-control\">\r\n                <option [ngValue]=\"undefined\" hidden>Select Item Type</option>\r\n                <option *ngFor=\"let item of itemList\" [value]=\"item.itemType\">{{item.itemType}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\" class=\" form-control-label\">Select Item Name</label>\r\n              <select name=\"select\" id=\"name\"\r\n                      [(ngModel)]=\"itemObject.itemName\"\r\n                      formControlName=\"itemNameControl\"\r\n                      class=\"form-control\">\r\n                <option [ngValue]=\"undefined\" hidden>Select Item Name</option>\r\n                <option *ngFor=\"let item of itemNameList\" [value]=\"item.itemName\">{{item.itemName}}</option>\r\n              </select>\r\n            </div>\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<label for=\"name\" class=\" form-control-label\">Item name</label>-->\r\n              <!--<input type=\"text\" id=\"name\"-->\r\n                     <!--[(ngModel)]=\"itemObject.itemName\"-->\r\n                     <!--formControlName=\"itemNameControl\"-->\r\n                     <!--placeholder=\"Add Item name\" class=\"form-control\">-->\r\n            <!--</div>-->\r\n            <div class=\"form-group\">\r\n              <label for=\"vat\" class=\" form-control-label\">Item Cost</label>\r\n              <input type=\"text\"\r\n                     [(ngModel)]=\"itemObject.itemCost\"\r\n                     formControlName=\"itemCostControl\"\r\n                     id=\"vat\" placeholder=\"Add Cost\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-sm\">\r\n              <i class=\"fa fa-dot-circle-o\"></i> Submit\r\n            </button>\r\n            <button type=\"reset\" class=\"btn btn-danger btn-sm pull float-right\">\r\n              <i class=\"fa fa-ban\"></i> Reset\r\n            </button>\r\n          </div>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"copyright\">\r\n          <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href=\"https://colorlib.com\">Colorlib</a>.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authenticated/landing/add-item/add-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authenticated/landing/add-item/add-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bo_restaurantItems_bo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../bo/restaurantItems.bo */ "./src/app/bo/restaurantItems.bo.ts");







var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(appService, router, dataStorageService, formBuilder) {
        this.appService = appService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.itemList = [];
        this.itemObject = {};
        this.itemNameList = [];
        this.restaurantId = this.appService.checkSessionValidity();
        this.createAddItemForm();
        this.getAllItems();
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.createAddItemForm = function () {
        this.createItemForm = this.formBuilder.group({
            itemTypeControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(128)
                ]],
            itemNameControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)
                ]],
            itemCostControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)
                ]]
        });
    };
    AddItemComponent.prototype.getAllItems = function () {
        var _this = this;
        this.appService.get('/all/items/types')
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.itemList = JSON.parse(data.payload);
            }
        });
    };
    AddItemComponent.prototype.getNamesThroughItems = function (itemType) {
        var _this = this;
        this.appService.get('/all/item/names?itemType=' + itemType)
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.itemNameList = JSON.parse(data.payload);
            }
        });
    };
    AddItemComponent.prototype.addRestaurantItem = function (itemObject) {
        var _this = this;
        var restaurantItemsBO = new _bo_restaurantItems_bo__WEBPACK_IMPORTED_MODULE_6__["RestaurantItemsBO"]();
        restaurantItemsBO.restaurantId = this.restaurantId;
        restaurantItemsBO.itemType = itemObject.itemType;
        restaurantItemsBO.itemName = itemObject.itemName;
        restaurantItemsBO.itemCost = itemObject.itemCost;
        this.appService.post('/item', restaurantItemsBO)
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.createItemForm.reset();
            }
        });
    };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/authenticated/landing/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/authenticated/landing/add-item/add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/landing/create-order/create-order.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/authenticated/landing/create-order/create-order.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGFuZGluZy9jcmVhdGUtb3JkZXIvY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authenticated/landing/create-order/create-order.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/authenticated/landing/create-order/create-order.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section__content section__content--p30\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\" style=\"background-color: darkgray\">\r\n          <div class=\"card-header\">\r\n            <strong>Create Order</strong>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-12\" *ngFor=\"let item of restaurantItemList; let i = index\">\r\n        <div class=\"card\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel (opened)=\"item.panelOpenState = true\"\r\n                                 (closed)=\"item.panelOpenState = false\">\r\n              <mat-expansion-panel-header (click)=\"getItemNamesFromType(item, item.itemType, i)\">\r\n                <mat-panel-title>\r\n                  {{item.itemType}}\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <p class=\"margin-l-10\" *ngFor=\"let itemName of item.itemNameList; let j = index\">{{itemName.itemName}}<mat-icon (click) = minusCount(i,j) class=\"cursor-pointer\">arrow_drop_down</mat-icon>{{itemName.count}}<mat-icon (click) = addCount(i,j) class=\"cursor-pointer\">arrow_drop_up</mat-icon><i class=\"pull-right\">{{itemName.totalCost}}</i></p>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12 m-b-25\">\r\n      <i>Total Order Price </i>\r\n      <i class=\"pull-right\">{{totalOrderCost}}</i>\r\n    </div>\r\n    <div>\r\n      <button id=\"payment-button\" (click)=\"saveOrder()\" type=\"submit\" class=\"btn btn-lg btn-info btn-block\">\r\n        <span id=\"payment-button-amount\">Add Order</span>\r\n        <span id=\"payment-button-sending\" style=\"display:none;\">Sending…</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"copyright\">\r\n          <p> Copyright © 2018 Colorlib. All rights reserved. Template by <a href=\"https://colorlib.com\">Colorlib</a>.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authenticated/landing/create-order/create-order.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/authenticated/landing/create-order/create-order.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bo_restaurantorders_bo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../bo/restaurantorders.bo */ "./src/app/bo/restaurantorders.bo.ts");
/* harmony import */ var _bo_orderdetails_bo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../bo/orderdetails.bo */ "./src/app/bo/orderdetails.bo.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);









var CreateOrderComponent = /** @class */ (function () {
    function CreateOrderComponent(appService, router, dataStorageService, formBuilder) {
        this.appService = appService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.restaurantItemList = [];
        this.orderDetails = [];
        this.totalOrderCost = 0;
        this.restaurantId = this.appService.checkSessionValidity();
        this.getRestaurantItems();
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
    };
    CreateOrderComponent.prototype.getRestaurantItems = function () {
        var _this = this;
        this.appService.get('/items/types')
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.restaurantItemList = JSON.parse(data.payload);
                for (var i = 0; i < _this.restaurantItemList.length; i++) {
                    _this.restaurantItemList[i].panelOpenState = false;
                }
            }
        });
    };
    CreateOrderComponent.prototype.getItemNamesFromType = function (item, itemType, index) {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(item.itemNameList)) {
            this.appService.get('/item/names?type=' + itemType)
                .subscribe(function (data) {
                if (data.appStatusCode === 0) {
                    _this.restaurantItemList[index].itemNameList = JSON.parse(data.payload);
                    for (var i = 0; i < _this.restaurantItemList[index].itemNameList.length; i++) {
                        _this.restaurantItemList[index].itemNameList[i].count = 0;
                        _this.restaurantItemList[index].itemNameList[i].totalCost = 0;
                    }
                }
            });
        }
    };
    CreateOrderComponent.prototype.addCount = function (mainListIndex, subListIndex) {
        if (this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count < 10) {
            this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count += 1;
            this.restaurantItemList[mainListIndex].itemNameList[subListIndex].totalCost = this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count * this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost;
            this.getTotalCost('add', parseFloat(this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost));
            this.updateOrderList('add', this.restaurantItemList[mainListIndex].itemNameList[subListIndex]);
        }
    };
    CreateOrderComponent.prototype.minusCount = function (mainListIndex, subListIndex) {
        if (this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count > 0) {
            this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count -= 1;
            this.restaurantItemList[mainListIndex].itemNameList[subListIndex].totalCost = this.restaurantItemList[mainListIndex].itemNameList[subListIndex].count * this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost;
            this.getTotalCost('substract', parseFloat(this.restaurantItemList[mainListIndex].itemNameList[subListIndex].itemCost));
            this.updateOrderList('substract', this.restaurantItemList[mainListIndex].itemNameList[subListIndex]);
        }
    };
    CreateOrderComponent.prototype.getTotalCost = function (type, value) {
        if (type === 'add') {
            this.totalOrderCost += value;
        }
        else if (type === 'substract' && this.totalOrderCost !== 0) {
            this.totalOrderCost -= value;
        }
    };
    CreateOrderComponent.prototype.updateOrderList = function (type, orderDetail) {
        var restaurantOrdersBO = new _bo_restaurantorders_bo__WEBPACK_IMPORTED_MODULE_6__["RestaurantOrdersBO"]();
        restaurantOrdersBO.restaurantId = this.restaurantId;
        restaurantOrdersBO.totalCost = this.totalOrderCost;
        if (type === 'add') {
            var orderDetailsBO = new _bo_orderdetails_bo__WEBPACK_IMPORTED_MODULE_7__["OrderDetailsBO"]();
            orderDetailsBO.numberOfItems = orderDetail.count;
            orderDetailsBO.itemId = orderDetail.itemId;
            orderDetailsBO.totalCost = orderDetail.totalCost;
            this.orderDetails.push(orderDetailsBO);
        }
        else if (type === 'substract') {
            var orderDetailsBO = new _bo_orderdetails_bo__WEBPACK_IMPORTED_MODULE_7__["OrderDetailsBO"]();
            orderDetailsBO.numberOfItems = orderDetail.count;
            orderDetailsBO.itemId = orderDetail.itemId;
            orderDetailsBO.totalCost = orderDetail.totalCost;
            var obj = this.orderDetails.find(function (orderDetailsBO) { return orderDetailsBO.itemId === orderDetail.itemId; });
            var a = this.orderDetails.indexOf(obj);
            this.orderDetails.splice(a, 1);
            if (orderDetail.count !== 0) {
                this.orderDetails.push(orderDetailsBO);
            }
        }
        restaurantOrdersBO.orderDetailsBOS = this.orderDetails;
        this.restaurantOrdersBO = restaurantOrdersBO;
    };
    CreateOrderComponent.prototype.saveOrder = function () {
        var _this = this;
        if (this.totalOrderCost !== 0) {
            this.appService.post('/order', this.restaurantOrdersBO)
                .subscribe(function (data) {
                if (data.appStatusCode === 0) {
                    _this.router.navigate(['landing/myorders']);
                }
            });
        }
        else {
            alert('Total Amount can not be zero');
        }
    };
    CreateOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/authenticated/landing/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/authenticated/landing/create-order/create-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/landing/landing.component.css":
/*!*************************************************************!*\
  !*** ./src/app/authenticated/landing/landing.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authenticated/landing/landing.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authenticated/landing/landing.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <!-- HEADER MOBILE-->\r\n  <header class=\"header-mobile d-block d-lg-none\">\r\n    <div class=\"header-mobile__bar\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"header-mobile-inner\">\r\n          <a class=\"logo\" href=\"index.html\">\r\n            <img src=\"assets/img/icon/logo.png\" alt=\"CoolAdmin\" />\r\n          </a>\r\n          <button class=\"hamburger hamburger--slider\" type=\"button\">\r\n                            <span class=\"hamburger-box\">\r\n                                <span class=\"hamburger-inner\"></span>\r\n                            </span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"navbar-mobile\">\r\n      <div class=\"container-fluid\">\r\n        <ul class=\"navbar-mobile__list list-unstyled\">\r\n          <li>\r\n            <a [routerLink]=\"['../landing/myorders']\" class=\"cursor-pointer\">\r\n              <i class=\"fas fa-chart-bar\"></i>My Orders</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"cursor-pointer\">\r\n              <i class=\"far fa-check-square\"></i>Forms</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['../landing/createorder']\" class=\"cursor-pointer\">\r\n              <i class=\"fas fa-table\"></i>Add Order</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n  <!-- END HEADER MOBILE-->\r\n\r\n  <!-- MENU SIDEBAR-->\r\n  <aside class=\"menu-sidebar d-none d-lg-block\">\r\n    <div class=\"logo\">\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/icon/logo.png\" alt=\"Cool Admin\" />\r\n      </a>\r\n    </div>\r\n    <div class=\"menu-sidebar__content js-scrollbar1\">\r\n      <nav class=\"navbar-sidebar p-r-l-0\">\r\n        <ul class=\"list-unstyled navbar__list\">\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['../landing/myorders']\" class=\"cursor-pointer m-l-20\">\r\n              <i class=\"mdi mdi-file-chart\"></i>My Orders</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['../landing/viewitems']\" class=\"cursor-pointer m-l-20\">\r\n              <i class=\"mdi mdi-silverware\"></i>View your Menu</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['../landing/createorder']\" class=\"cursor-pointer m-l-20\">\r\n              <i class=\"mdi mdi-plus-circle-outline\"></i>Add Order</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </aside>\r\n  <!-- END MENU SIDEBAR-->\r\n\r\n  <!-- PAGE CONTAINER-->\r\n  <div class=\"page-container\">\r\n    <!-- HEADER DESKTOP-->\r\n    <header class=\"header-desktop\">\r\n      <div class=\"section__content section__content--p30\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"header-wrap pull-right\">\r\n\r\n            <div class=\"header-button\">\r\n              <!--<div class=\"account-wrap\">-->\r\n                <!--<div class=\"account-item clearfix js-item-menu\">-->\r\n                  <!--<div class=\"content\">-->\r\n                    <!--<a class=\"js-acc-btn\" href=\"#\">{{restaurant.name}}</a>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"account-dropdown js-dropdown\">-->\r\n                    <!--<div class=\"info clearfix\">-->\r\n                      <!--<div class=\"image\">-->\r\n                      <!--</div>-->\r\n                      <!--<div class=\"content\">-->\r\n                        <!--<h5 class=\"name\">-->\r\n                          <!--<a href=\"#\">john doe</a>-->\r\n                        <!--</h5>-->\r\n                        <!--<span class=\"email\">johndoe@example.com</span>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"account-dropdown__body\">-->\r\n                      <!--<div class=\"account-dropdown__item\">-->\r\n                        <!--<a href=\"#\">-->\r\n                          <!--<i class=\"zmdi zmdi-account\"></i>Account</a>-->\r\n                      <!--</div>-->\r\n                      <!--<div class=\"account-dropdown__item\">-->\r\n                        <!--<a href=\"#\">-->\r\n                          <!--<i class=\"zmdi zmdi-settings\"></i>Setting</a>-->\r\n                      <!--</div>-->\r\n                      <!--<div class=\"account-dropdown__item\">-->\r\n                        <!--<a href=\"#\">-->\r\n                          <!--<i class=\"zmdi zmdi-money-box\"></i>Billing</a>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"account-dropdown__footer\">-->\r\n                      <!--<a href=\"#\">-->\r\n                        <!--<i class=\"zmdi zmdi-power\"></i>Logout</a>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <div class=\"dropdown\">\r\n                <button class=\"dropbtn\">{{restaurant.name}}\r\n                  <i class=\"fa fa-caret-down\"></i>\r\n                </button>\r\n                <div class=\"dropdown-content\">\r\n                  <a href=\"#\">Logout</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authenticated/landing/landing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authenticated/landing/landing.component.ts ***!
  \************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LandingComponent = /** @class */ (function () {
    function LandingComponent(appService, router, dataStorageService, formBuilder) {
        this.appService = appService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.restaurant = {};
        this.getRestaurantProfile();
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getRestaurantProfile = function () {
        var _this = this;
        this.appService.get('/profile')
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.restaurant = JSON.parse(data.payload);
            }
        });
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/authenticated/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/authenticated/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/landing/my-orders/my-orders.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/authenticated/landing/my-orders/my-orders.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGFuZGluZy9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authenticated/landing/my-orders/my-orders.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/authenticated/landing/my-orders/my-orders.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section__content section__content--p30\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"card\" style=\"background-color: darkgray\">\n          <div class=\"card-header\">\n            <strong>Previous Orders</strong>\n          </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"col-md-12\" *ngFor=\"let order of orderList; let i = index\">\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"height: 47px\">\n            <strong class=\"card-title mb-3 pull-right\">{{order.orderedTime | date:dateFormat}}</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"mx-auto d-block m-b-5\" style=\"border-bottom: solid; border-width: thin\" *ngFor=\"let orderDetails of order.orderDetailsBOS\">\n              <span class=\"font-weight-bold\">{{orderDetails.itemName}} ({{orderDetails.numberOfItems}})</span>\n              <span class=\"pull-right font-weight-bolder\">{{orderDetails.totalCost}}</span>\n            </div>\n            <hr>\n          </div>\n          <div class=\"card-header\" style=\"height: 47px\">\n            <strong class=\"card-title mb-3 pull-right\">{{order.totalCost}}</strong>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"copyright\">\n          <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href=\"https://colorlib.com\">Colorlib</a>.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated/landing/my-orders/my-orders.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/authenticated/landing/my-orders/my-orders.component.ts ***!
  \************************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(appService, router, dataStorageService, formBuilder) {
        this.appService = appService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.orderList = [];
        this.dateFormat = 'dd-MMM-yyyy';
        this.getMyOrders();
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent.prototype.getMyOrders = function () {
        var _this = this;
        this.appService.get('/orders')
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.orderList = JSON.parse(data.payload);
            }
        });
    };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/authenticated/landing/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/authenticated/landing/my-orders/my-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/landing/order-details/order-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/authenticated/landing/order-details/order-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGFuZGluZy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/authenticated/landing/order-details/order-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/authenticated/landing/order-details/order-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/authenticated/landing/order-details/order-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/authenticated/landing/order-details/order-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent() {
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
    };
    OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/authenticated/landing/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/authenticated/landing/order-details/order-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/landing/view-items/view-items.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/authenticated/landing/view-items/view-items.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGFuZGluZy92aWV3LWl0ZW1zL3ZpZXctaXRlbXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/authenticated/landing/view-items/view-items.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/authenticated/landing/view-items/view-items.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section__content section__content--p30\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n      <div class=\"card\" style=\"background-color: darkgray\">\n        <div class=\"card-header\">\n          <strong>View items</strong>\n          <button type=\"reset\" class=\"btn btn-primary btn-sm float-right\" [routerLink]=\"['../../landing/additem']\">\n            Add Item\n          </button>\n        </div>\n\n\n      </div>\n    </div>\n\n\n      <div class=\"col-lg-12\" *ngFor=\"let item of itemList; let i = index\">\n        <div class=\"card\">\n          <mat-accordion>\n            <mat-expansion-panel (opened)=\"item.panelOpenState = true\"\n                                 (closed)=\"item.panelOpenState = false\">\n              <mat-expansion-panel-header (click)=\"getItemNamesFromType(item.itemType, i)\">\n                <mat-panel-title>\n                  {{item.itemType}}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <p class=\"margin-l-10\" *ngFor=\"let itemName of item.itemNameList\">{{itemName.itemName}}</p>\n            </mat-expansion-panel>\n          </mat-accordion>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"copyright\">\n          <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href=\"https://colorlib.com\">Colorlib</a>.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated/landing/view-items/view-items.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authenticated/landing/view-items/view-items.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItemsComponent", function() { return ViewItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ViewItemsComponent = /** @class */ (function () {
    function ViewItemsComponent(appService, router, dataStorageService, formBuilder) {
        this.appService = appService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.itemList = [];
        this.itemNameList = [];
        this.panelOpenState = false;
        this.getAllItems();
    }
    ViewItemsComponent.prototype.ngOnInit = function () {
    };
    ViewItemsComponent.prototype.getAllItems = function () {
        var _this = this;
        this.appService.get('/items/types')
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.itemList = JSON.parse(data.payload);
                for (var i = 0; i < _this.itemList.length; i++) {
                    _this.itemList[i].panelOpenState = false;
                }
            }
        });
    };
    ViewItemsComponent.prototype.getItemNamesFromType = function (itemType, index) {
        var _this = this;
        this.appService.get('/item/names?type=' + itemType)
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                _this.itemList[index].itemNameList = JSON.parse(data.payload);
            }
        });
    };
    ViewItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-items',
            template: __webpack_require__(/*! ./view-items.component.html */ "./src/app/authenticated/landing/view-items/view-items.component.html"),
            styles: [__webpack_require__(/*! ./view-items.component.css */ "./src/app/authenticated/landing/view-items/view-items.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ViewItemsComponent);
    return ViewItemsComponent;
}());



/***/ }),

/***/ "./src/app/bo/idvalueparams.bo.ts":
/*!****************************************!*\
  !*** ./src/app/bo/idvalueparams.bo.ts ***!
  \****************************************/
/*! exports provided: IdValueParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdValueParams", function() { return IdValueParams; });
var IdValueParams = /** @class */ (function () {
    function IdValueParams(id, value) {
        this.id = id;
        this.value = value;
    }
    return IdValueParams;
}());



/***/ }),

/***/ "./src/app/bo/namevaluepair.bo.ts":
/*!****************************************!*\
  !*** ./src/app/bo/namevaluepair.bo.ts ***!
  \****************************************/
/*! exports provided: NameValuePairBO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValuePairBO", function() { return NameValuePairBO; });
var NameValuePairBO = /** @class */ (function () {
    function NameValuePairBO(name, value) {
        this.name = name;
        this.value = value;
    }
    return NameValuePairBO;
}());



/***/ }),

/***/ "./src/app/bo/orderdetails.bo.ts":
/*!***************************************!*\
  !*** ./src/app/bo/orderdetails.bo.ts ***!
  \***************************************/
/*! exports provided: OrderDetailsBO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsBO", function() { return OrderDetailsBO; });
var OrderDetailsBO = /** @class */ (function () {
    function OrderDetailsBO() {
    }
    return OrderDetailsBO;
}());



/***/ }),

/***/ "./src/app/bo/restaurantItems.bo.ts":
/*!******************************************!*\
  !*** ./src/app/bo/restaurantItems.bo.ts ***!
  \******************************************/
/*! exports provided: RestaurantItemsBO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantItemsBO", function() { return RestaurantItemsBO; });
var RestaurantItemsBO = /** @class */ (function () {
    function RestaurantItemsBO() {
    }
    return RestaurantItemsBO;
}());



/***/ }),

/***/ "./src/app/bo/restaurantorders.bo.ts":
/*!*******************************************!*\
  !*** ./src/app/bo/restaurantorders.bo.ts ***!
  \*******************************************/
/*! exports provided: RestaurantOrdersBO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantOrdersBO", function() { return RestaurantOrdersBO; });
var RestaurantOrdersBO = /** @class */ (function () {
    function RestaurantOrdersBO() {
        this.orderDetailsBOS = [];
    }
    return RestaurantOrdersBO;
}());



/***/ }),

/***/ "./src/app/non-authenticated/register/register.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/non-authenticated/register/register.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1hdXRoZW50aWNhdGVkL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/non-authenticated/register/register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/non-authenticated/register/register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <div class=\"page-content--bge5\">\r\n    <div class=\"container\">\r\n      <div class=\"login-wrap\">\r\n        <div class=\"login-content\">\r\n          <div class=\"login-logo\">\r\n            <a href=\"#\">\r\n              <img src=\"images/icon/logo.png\" alt=\"CoolAdmin\">\r\n            </a>\r\n          </div>\r\n          <div class=\"login-form\">\r\n            <form [formGroup]=\"registrationForm\"\r\n                  (submit)=\"register(restaurant)\">\r\n              <div class=\"form-group\">\r\n                <label>Restaurant Name</label>\r\n                <input class=\"au-input au-input--full\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"restaurant.name\"\r\n                       formControlName=\"nameControl\"\r\n                       name=\"username\"\r\n                       placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Email Address / Phone Number</label>\r\n                <input class=\"au-input au-input--full\"\r\n                       type=\"email\"\r\n                       name=\"email\"\r\n                       [(ngModel)]=\"restaurant.emailOrPhone\"\r\n                       formControlName=\"emailControl\"\r\n                       placeholder=\"Email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input class=\"au-input au-input--full\"\r\n                       type=\"password\"\r\n                       [(ngModel)]=\"restaurant.password\"\r\n                       formControlName=\"passwordControl\"\r\n                       name=\"password\"\r\n                       placeholder=\"Password\">\r\n              </div>\r\n              <button class=\"au-btn au-btn--block au-btn--green m-b-20\" type=\"submit\">register</button>\r\n            </form>\r\n            <div class=\"register-link\">\r\n              <p>\r\n                Already have account?\r\n                <a [routerLink]=\"['']\">Sign In</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/non-authenticated/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/non-authenticated/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, appService, dataStorageService, formBuilder) {
        this.router = router;
        this.appService = appService;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.restaurant = {};
        this.appService.checkSessionValidity();
        this.createRegisterationForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createRegisterationForm = function () {
        this.registrationForm = this.formBuilder.group({
            nameControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)
                ]],
            emailControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                ]],
            passwordControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                ]]
        });
    };
    RegisterComponent.prototype.register = function (restaurant) {
        var _this = this;
        this.appService.get('/exists?id=' + restaurant.emailOrPhone)
            .subscribe(function (data1) {
            if (data1.appStatusCode !== 0) {
                _this.appService.post('/register', restaurant)
                    .subscribe(function (data) {
                    if (data.appStatusCode === 0) {
                        var restaurantId = JSON.parse(data.payload);
                        _this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SESSION_RESTAURANT_ID, restaurantId);
                        _this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].LANDING_URL]);
                    }
                });
            }
            else {
                alert('This email/phone already exist');
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/non-authenticated/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/non-authenticated/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/non-authenticated/sign-in/sign-in.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/non-authenticated/sign-in/sign-in.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1hdXRoZW50aWNhdGVkL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/non-authenticated/sign-in/sign-in.component.html":
/*!******************************************************************!*\
  !*** ./src/app/non-authenticated/sign-in/sign-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <div class=\"page-content--bge5\">\r\n    <div class=\"container\">\r\n      <div class=\"login-wrap\">\r\n        <div class=\"login-content\">\r\n          <div class=\"login-logo\">\r\n            <a href=\"#\">\r\n              <img src=\"images/icon/logo.png\" alt=\"CoolAdmin\">\r\n            </a>\r\n          </div>\r\n          <div class=\"login-form\">\r\n            <form [formGroup]=\"loginForm\"\r\n                  (submit)=\"loginRestaurant(login)\">\r\n              <div class=\"form-group\">\r\n                <label>Email Address</label>\r\n                <input class=\"au-input au-input--full\"\r\n                       type=\"email\"\r\n                       [(ngModel)]=\"login.emailOrPhone\"\r\n                       formControlName=\"emailControl\"\r\n                       name=\"email\" placeholder=\"Email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input class=\"au-input au-input--full\"\r\n                       type=\"password\"\r\n                       [(ngModel)]=\"login.password\"\r\n                       formControlName=\"passwordControl\"\r\n                       name=\"password\"\r\n                       placeholder=\"Password\">\r\n              </div>\r\n              <button class=\"au-btn au-btn--block au-btn--green m-b-20\" type=\"submit\">Sign in</button>\r\n            </form>\r\n            <div class=\"register-link\">\r\n              <p>\r\n                Don't you have account?\r\n                <a [routerLink]=\"['/register']\">Register here</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/non-authenticated/sign-in/sign-in.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/non-authenticated/sign-in/sign-in.component.ts ***!
  \****************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bo_namevaluepair_bo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bo/namevaluepair.bo */ "./src/app/bo/namevaluepair.bo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var _services_datastorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/datastorage.service */ "./src/app/services/datastorage.service.ts");








var SignInComponent = /** @class */ (function () {
    function SignInComponent(appService, router, dataStorageService, formBuilder) {
        this.appService = appService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.formBuilder = formBuilder;
        this.login = {};
        this.appService.checkSessionValidity();
        this.createLoginForm();
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.createLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            emailControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(128)
                ]],
            passwordControl: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)
                ]]
        });
    };
    SignInComponent.prototype.loginRestaurant = function (login) {
        var _this = this;
        this.appService.get('/exists?id=' + login.emailOrPhone)
            .subscribe(function (data1) {
            if (data1.appStatusCode === 0) {
                _this.appService.put('/login', new _bo_namevaluepair_bo__WEBPACK_IMPORTED_MODULE_4__["NameValuePairBO"](login.emailOrPhone, login.password))
                    .subscribe(function (data) {
                    if (data.appStatusCode === 0) {
                        var restaurantId = JSON.parse(data.payload);
                        _this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].SESSION_RESTAURANT_ID, restaurantId);
                        _this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].LANDING_URL]);
                    }
                });
            }
            else {
                alert('Your email/phone does not exist');
            }
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/non-authenticated/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/non-authenticated/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_datastorage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datastorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);









var endpoint = 'http://localhost:8090/restaurants';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AppService = /** @class */ (function () {
    function AppService(http, dataStorageService, router) {
        this.http = http;
        this.dataStorageService = dataStorageService;
        this.router = router;
    }
    AppService.prototype.isNotEmpty = function (value) {
        return value !== null && value.length > 0;
    };
    AppService.prototype.createAuthorizationHeader = function () {
        var authToken = this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].AUTH_STORAGE_KEY);
        var deviceId = this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].DEVICE_STORAGE_KEY);
        var restaurantId = this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_RESTAURANT_ID);
        if (this.isNotEmpty(restaurantId)) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-com-restaurant-id': restaurantId,
                'X-com-auth-token': authToken,
                'X-com-device-id': deviceId,
                'X-com-ip-address': '',
                'X-com-latitude': '',
                'X-com-longitude': '',
            });
            return headers;
        }
        else {
            this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].LAUNCH_URL]);
        }
    };
    AppService.prototype.get = function (url) {
        var _this = this;
        var headers = this.createAuthorizationHeader();
        return this.http.get(endpoint + url, {
            headers: headers,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data) {
                return _this.statusCheck(data);
            }
        }));
    };
    AppService.prototype.post = function (url, payload) {
        var _this = this;
        return this.http.post(endpoint + url, payload, {
            headers: this.createAuthorizationHeader(),
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data) {
                return _this.statusCheck(data);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post')));
    };
    AppService.prototype.put = function (url, payload) {
        var _this = this;
        return this.http.put(endpoint + url, payload, {
            headers: this.createAuthorizationHeader(),
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data) {
                return _this.statusCheck(data);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('put')));
    };
    AppService.prototype.delete = function (url) {
        var _this = this;
        return this.http.delete(endpoint + url, { headers: this.createAuthorizationHeader(), observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data) {
                return _this.statusCheck(data);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProduct')));
    };
    AppService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AppService.prototype.statusCheck = function (response) {
        var data = response.body;
        if (data.appStatusCode === 10) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].AUTH_STORAGE_KEY))) {
                alert('SESSION EXPIRED');
            }
            this.forceLogout();
        }
        else if (data.appStatusCode === 100 || data.appStatusCode === 4) {
            // this.serverErrorMessage(data);
        }
        else {
            this.saveAuthToken(response.headers);
            return data;
        }
    };
    AppService.prototype.saveAuthToken = function (headers) {
        var authToken = headers.get('X-com-auth-token');
        var deviceId = headers.get('X-com-device-id');
        var restaurantId = headers.get('X-com-restaurant-id');
        if (this.isNotEmpty(authToken) && this.isNotEmpty(deviceId) && this.isNotEmpty(restaurantId)) {
            this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].AUTH_STORAGE_KEY, authToken);
            this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].DEVICE_STORAGE_KEY, deviceId);
            this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_RESTAURANT_ID, restaurantId);
        }
    };
    AppService.prototype.forceLogout = function () {
        this.dataStorageService.clearLocalStorage();
        this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].LAUNCH_URL]);
    };
    AppService.prototype.checkSessionValidity = function () {
        var restaurantId = this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_RESTAURANT_ID);
        if (Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].AUTH_STORAGE_KEY)) || Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].DEVICE_STORAGE_KEY))) {
            if (!_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_NO_CHECK_URL.includes(this.router.url)) {
                alert('Session inactive');
                this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].LAUNCH_URL]);
            }
        }
        else {
            if (_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_NO_CHECK_URL.includes(this.router.url)) {
                this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].LANDING_URL]);
                return this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_RESTAURANT_ID);
            }
            return this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SESSION_RESTAURANT_ID);
        }
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _datastorage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/datastorage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/datastorage.service.ts ***!
  \*************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




var DataStorageService = /** @class */ (function () {
    function DataStorageService() {
    }
    DataStorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    DataStorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(value)) {
            return JSON.parse(value);
        }
        return null;
    };
    DataStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    DataStorageService.prototype.clearLocalStorage = function () {
        this.remove(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].DEVICE_STORAGE_KEY);
        this.remove(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].AUTH_STORAGE_KEY);
        this.remove(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SESSION_RESTAURANT_ID);
        // this.remove(AppConstants.GCM_TOKEN);
    };
    DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _datastorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datastorage.service */ "./src/app/services/datastorage.service.ts");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var _bo_idvalueparams_bo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bo/idvalueparams.bo */ "./src/app/bo/idvalueparams.bo.ts");







var LoginService = /** @class */ (function () {
    function LoginService(router, appService, dataStorageService) {
        this.router = router;
        this.appService = appService;
        this.dataStorageService = dataStorageService;
    }
    LoginService.prototype.loginGlobal = function (user, pass, bo, flag) {
        var _this = this;
        var userName = '7877540939';
        this.appService.get('/iam/exists' + '?id=' + userName)
            .subscribe(function (data) {
            if (data.appStatusCode === 0) {
                var restaurantId = JSON.parse(data.payload).loginId;
                _this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SESSION_RESTAURANT_ID, restaurantId);
                _this.loginUserPass(user, pass);
            }
        });
    };
    LoginService.prototype.loginUserPass = function (login, pass) {
        var _this = this;
        this.appService.put('/iam/login', new _bo_idvalueparams_bo__WEBPACK_IMPORTED_MODULE_6__["IdValueParams"](login, pass))
            .subscribe(function (data) {
            var idvalueparam = JSON.parse(data.payload);
            if (data.appStatusCode === 0) {
                var restaurantId = idvalueparam.id;
                // this.saveUserSessionDetails(data);
                _this.dataStorageService.write(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SESSION_RESTAURANT_ID, restaurantId);
                _this.saveGCMTokenAndUserDetailsAndRouteToLanding();
            }
        });
    };
    LoginService.prototype.saveGCMTokenAndUserDetailsAndRouteToLanding = function () {
        var _this = this;
        var simpleData = {};
        var token = this.dataStorageService.read(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].GCM_TOKEN);
        // this.getUserDetails();
        if (token != null) {
            simpleData.data = token;
            this.appService.put('/iam/gcm', simpleData)
                .subscribe(function (data) {
                if (data.appStatusCode === 0) {
                    _this.router.navigate([_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].LANDING_URL]);
                }
            });
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _datastorage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/app.constants.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/app.constants.ts ***!
  \*****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.APP_NAME = 'RESTAURANTS';
    AppConstants.HEADER_APP_ID = 'AW';
    AppConstants.LAUNCH_URL = '/';
    AppConstants.REGISTER_URL = '/register';
    AppConstants.LANDING_URL = 'landing/myorders';
    AppConstants.GCM_TOKEN = 'GCM_TOKEN';
    AppConstants.AUTH_KEY = 'TOKEN';
    AppConstants.DEVICE_KEY = 'DEVICE';
    AppConstants.SESSION_NO_CHECK_URL = [AppConstants.LAUNCH_URL, AppConstants.REGISTER_URL];
    AppConstants.AUTH_STORAGE_KEY = AppConstants.APP_NAME + '-' + AppConstants.AUTH_KEY;
    AppConstants.DEVICE_STORAGE_KEY = AppConstants.APP_NAME + '-' + AppConstants.DEVICE_KEY;
    AppConstants.SESSION_RESTAURANT_ID = AppConstants.APP_NAME + '-SESSION_RESTAURANT_ID';
    AppConstants.DATE_ONLY_FORMAT = {
        parseInput: 'YYYY-MM-DD',
        fullPickerInput: 'DD-MM-YYYY',
        datePickerInput: 'DD-MM-YYYY',
        timePickerInput: 'LT',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    };
    AppConstants.DATETIME_FORMAT = {
        parseInput: 'LL LT',
        fullPickerInput: 'DD-MM-YYYY LT',
        datePickerInput: 'LL',
        timePickerInput: 'LT',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    };
    return AppConstants;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\personal-workspace\restaurant-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map