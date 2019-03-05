import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './non-authenticated/sign-in/sign-in.component';
import {RegisterComponent} from './non-authenticated/register/register.component';
import {LandingComponent} from './authenticated/landing/landing.component';
import {AddItemComponent} from "./authenticated/landing/add-item/add-item.component";
import {MyOrdersComponent} from "./authenticated/landing/my-orders/my-orders.component";
import {CreateOrderComponent} from "./authenticated/landing/create-order/create-order.component";
import {ViewItemsComponent} from "./authenticated/landing/view-items/view-items.component";
import {OrderDetailsComponent} from "./authenticated/landing/order-details/order-details.component";

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingComponent,
    children: [
      {path: 'additem', component: AddItemComponent},
      {path: 'myorders', component: MyOrdersComponent},
      {path: 'createorder', component: CreateOrderComponent},
      {path: 'viewitems', component: ViewItemsComponent},
      {path: 'details/:id', component: OrderDetailsComponent}
    ]},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
