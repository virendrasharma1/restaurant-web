import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './non-authenticated/sign-in/sign-in.component';
import {RegisterComponent} from './non-authenticated/register/register.component';
import {LandingComponent} from './authenticated/landing/landing.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingComponent},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
