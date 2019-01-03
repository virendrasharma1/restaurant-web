import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './non-authenticated/launch/sign-in/sign-in.component';
import {LaunchComponent} from './non-authenticated/launch/launch.component';
import {RegisterComponent} from './non-authenticated/launch/register/register.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/launch/signin',
    pathMatch: 'full'},
  {
    path: 'launch', component: LaunchComponent,
    children: [
      {path: 'signin', component: SignInComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
