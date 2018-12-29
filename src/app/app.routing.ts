import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './non-authenticated/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
