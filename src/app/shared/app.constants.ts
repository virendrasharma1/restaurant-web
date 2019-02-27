
export class AppConstants {
  public static APP_NAME = 'RESTAURANTS';
  public static HEADER_APP_ID = 'AW';
  public static LAUNCH_URL = '/';
  public static LANDING_URL = 'landing/dashboard';
  public static GCM_TOKEN = 'GCM_TOKEN';
  public static AUTH_KEY = 'TOKEN';
  public static DEVICE_KEY = 'DEVICE';
  public static AUTH_STORAGE_KEY = AppConstants.APP_NAME + '-' + AppConstants.AUTH_KEY;
  public static DEVICE_STORAGE_KEY = AppConstants.APP_NAME + '-' + AppConstants.DEVICE_KEY;
  public static SESSION_RESTAURANT_ID = AppConstants.APP_NAME + '-SESSION_RESTAURANT_ID';

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
