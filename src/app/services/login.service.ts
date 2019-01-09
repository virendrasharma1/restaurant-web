import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AppService} from './app.service';
import {DataStorageService} from './datastorage.service';
import {AppConstants} from '../shared/app.constants';
import {IdValueParams} from '../bo/idvalueparams.bo';

@Injectable()
export class LoginService {

  constructor(private router: Router, private appService: AppService, private dataStorageService: DataStorageService) {
  }

  loginGlobal(user, pass, bo, flag) {
    const userName = '7877540939';
    this.appService.get('/iam/exists' + '?id=' + userName)
      .subscribe(data => {
        if (data.appStatusCode === 0) {
          const restaurantId = JSON.parse(data.payload).loginId;
          this.dataStorageService.write(AppConstants.SESSION_RESTAURANT_ID, restaurantId);
          this.loginUserPass(user, pass);
        }
      });
  }

  private loginUserPass(login, pass) {
    this.appService.put('/iam/login', new IdValueParams(login, pass))
      .subscribe(data => {
        const idvalueparam = JSON.parse(data.payload);
        if (data.appStatusCode === 0) {
          const restaurantId = idvalueparam.id;
          // this.saveUserSessionDetails(data);
          this.dataStorageService.write(AppConstants.SESSION_RESTAURANT_ID, restaurantId);
          this.saveGCMTokenAndUserDetailsAndRouteToLanding();
        }
      });
  }

  saveGCMTokenAndUserDetailsAndRouteToLanding() {
    const simpleData: any = {};
    const token = this.dataStorageService.read(AppConstants.GCM_TOKEN);
    // this.getUserDetails();
    if (token != null) {
      simpleData.data = token;
      this.appService.put('/iam/gcm', simpleData)
        .subscribe(data => {
          if (data.appStatusCode === 0) {
            this.router.navigate([AppConstants.LANDING_URL]);
          }
        });
    }
  }

  // getUserDetails() {
  //   this.user = this.dataStorageService.read(AppConstants.APP_USER_NAME);
  //   this.media = this.dataStorageService.read(AppConstants.APP_MEDIA_URL);
  //   this.preferredIndustry = this.dataStorageService.read(AppConstants.INDUSTRY_NAME);
  //   this.mobileNumber = this.dataStorageService.read(AppConstants.APP_MOBILE_NUMBER);
  //   this.emailAddress = this.dataStorageService.read(AppConstants.APP_EMAIL_ADDRESS);
  //
  //   if (isNullOrUndefined(this.user) || isNullOrUndefined(this.preferredIndustry)) {
  //     this.apiCallerService.apiGetCaller('/aspirants/profile')
  //       .subscribe(data => {
  //         if (data.appStatusCode == 0) {
  //           let aspirantsBO = JSON.parse(data.payload);
  //
  //           this.user = aspirantsBO.knownAs;
  //           this.media = aspirantsBO.mediaFile;
  //           this.preferredIndustry = aspirantsBO.preferredIndustry;
  //           this.mobileNumber = aspirantsBO.mobileNumber;
  //           this.emailAddress = aspirantsBO.emailAddress;
  //
  //           this.dataStorageService.write(AppConstants.APP_USER_NAME, this.user);
  //           this.dataStorageService.write(AppConstants.APP_MEDIA_URL, this.media);
  //           this.dataStorageService.write(AppConstants.APP_MOBILE_NUMBER, this.mobileNumber);
  //           this.dataStorageService.write(AppConstants.APP_EMAIL_ADDRESS, this.emailAddress);
  //
  //           if (!isNullOrUndefined(this.preferredIndustry)) {
  //             this.dataStorageService.write(AppConstants.INDUSTRY_NAME, this.preferredIndustry);
  //             this.router.navigate([AppConstants.LANDING_URL]);
  //           } else {
  //             this.router.navigate([AppConstants.ONBOARDING_URL]);
  //           }
  //
  //         }
  //       });
  //   }
  // }
}
