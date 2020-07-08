// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken:
      'pk.eyJ1IjoianVzdG5hdDMiLCJhIjoiY2tibHRtcGtpMDBybjJwb2c1cjV5c3o2ZiJ9.U_SgfLt_LDW-4I1m_f2AKA',
  },
  APIKey: {
    WeatherKey: '9ab7a8e9725f93fe5b641a6a4c794d14',
  },
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://127.0.0.1:8080/auth/realms/master',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4200/map',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'Meteo-app',

    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true,
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
