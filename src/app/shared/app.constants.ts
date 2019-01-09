
export class AppConstants {
  public static APP_NAME = 'RESTAURANTS';
  public static HEADER_APP_ID = 'AW';
  public static LAUNCH_URL = '/';
  public static LANDING_URL = 'landing/dashboard';
  public static GCM_TOKEN = 'GCM_TOKEN';
  public static API_ENDPOINT;
  public static BUSINESS_URL;
  public static OPERATIONS_URL;
  public static TRADEPARTNER_URL;
  public static VALUEPARTNER_URL;
  public static COCREATOR_URL;
  public static MOONDRIVE_URL;
  public static CHAT_URL;
  public static ENVIRONMENT_NAME;
  // public static ASSESSMENT_TEST_URL = environment.assessmentTestUrl;
  public static AUTH_KEY = 'TOKEN';
  public static DEVICE_KEY = 'DEVICE';
  public static IP_ADDRESS = '';
  public static AUTH_STORAGE_KEY = AppConstants.APP_NAME + '-' + AppConstants.AUTH_KEY;
  public static DEVICE_STORAGE_KEY = AppConstants.APP_NAME + '-' + AppConstants.DEVICE_KEY;
  public static APP_USER_NAME = AppConstants.APP_NAME + '-' + 'USERNAME';
  public static APP_MEDIA_URL = AppConstants.APP_NAME + '-' + 'MEDIA-URL';
  public static APP_MOBILE_NUMBER = AppConstants.APP_NAME + "-" + "MOBILE-NUMBER";
  public static APP_EMAIL_ADDRESS = AppConstants.APP_NAME + "-" + "EMAIL-ADDRESS";
  public static APP_DATE_FORMAT = AppConstants.APP_NAME + "-" + "DATE-FORMAT";
  // public static FACEBOOK_ID = environment.facebookId;
  // public static GOOGLE_ID = environment.facebookId;
  public static STATUS_YES= "Y";
  public static STATUS_NO= "N";
  public static DELETE_PERMANENTLY = "DP";
  public static DELETE_TEMPORARILY= "DT";
  public static DELETE_ANONYMOUS = "DA";
  public static TERMS_OF_USE = "TERMS_OF_USE";
  public static PRIVACY = "PRIVACY";
  public static RESET_PASS_URL = "resetpassword";
  public static SESSION_RESTAURANT_ID = AppConstants.APP_NAME + '-SESSION_RESTAURANT_ID';
  public static SESSION_PARTNER_ID = AppConstants.APP_NAME + "-SESSION_PARTNER_ID";
  public static SESSION_PARTNER_NAME = AppConstants.APP_NAME + "-SESSION_PARTNER_NAME";
  private static ENTER_PASSWORD_URL = "signin";

  public static DATE_ONLY_FORMAT = {
    parseInput: 'YYYY-MM-DD',
    fullPickerInput: 'DD-MM-YYYY',
    datePickerInput: 'DD-MM-YYYY',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  };

  public static DATETIME_FORMAT = {
    parseInput: 'LL LT',
    fullPickerInput: 'DD-MM-YYYY LT',
    datePickerInput: 'LL',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  };
}
