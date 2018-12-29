import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './non-authenticated/sign-in/sign-in.component';
import {RegisterComponent} from "./non-authenticated/register/register.component";

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'register', component: RegisterComponent}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
