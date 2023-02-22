// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginurl:'http://172.16.16.90:9099/empservice/login',
  crateemployee:'http://172.16.16.90:9099/empservice/register',
  listEMployee:'http://172.16.16.90:9099/empservice/getEmployees',
  qstnCreateurl:'http://172.16.16.90:9099/empservice/addQuestion',
  qstnListurl:'http://172.16.16.90:9099/empservice/getQstn',
  reportnurl:'http://172.16.16.90:9099/empservice/getEmployees',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
