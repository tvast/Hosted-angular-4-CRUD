import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

	userProfile: any;
	requestedScopes: string = 'openid profile read:messages write:messages';

  auth0 = new auth0.WebAuth({
    clientID: 'gA2J2W7vxG5KjCXj795EeJ4g7FJvnXKs',
    domain: 'bbwvm.eu.auth0.com',
    responseType: 'token id_token',
    // audience: 'https://bbwvm.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',      
    // scope: 'openid',
    audience: '{https://bbwvm.eu.auth0.com/api/v2/}',
  	// scope: 'openid profile read:messages',
  	scope: this.requestedScopes
  });



  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

   public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  public userHasScopes(scopes: Array<string>): boolean {
  const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
  return scopes.every(scope => grantedScopes.includes(scope));
}

  private setSession(authResult): void {
  	const scopes = authResult.scope || this.requestedScopes || '';
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
      localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('Access token must exist to fetch profile');
  }

  const self = this;
  this.auth0.client.userInfo(accessToken, (err, profile) => {
    if (profile) {
      self.userProfile = profile;
    }
    cb(err, profile);
  });
}

}