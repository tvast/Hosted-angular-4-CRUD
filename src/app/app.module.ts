import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk';

import { WolfsoundService } from './wolfsound.service';
import { ImageService } from './image.service';
import { AuthService } from './auth-service.service';
import { WolfsoundListComponent } from './wolfsound-list/wolfsound-list.component';
import { RouterModule }   from '@angular/router';
import { WolfsoundHomeComponent } from './wolfsound-home/wolfsound-home.component';
import { FormComponent } from './form/form.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { PingComponent } from './ping/ping.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
 RouterModule.forRoot([
      {
        path: '',
        component: WolfsoundListComponent
      },
      {
        path: 'list',
        component: WolfsoundListComponent
      },
      {
        path: 'home',
        component:  WolfsoundHomeComponent
      },
      {
        path: 'add',
        component:  FormComponent
      },
      { 
        path: 'wolf/:id', component: DetailViewComponent 
      },
       { 
        path: 'callback', component: CallbackComponent 
      },
      { 
        path: 'login', component: LoginComponent
      },
      { 
        path: 'profil', component: ProfileComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    WolfsoundListComponent,
    WolfsoundHomeComponent,
    FormComponent,
    FileSelectDirective, 
    FileDropDirective, DetailViewComponent, LoginComponent, CallbackComponent, ProfileComponent, PingComponent,
  ],
  providers: [
  WolfsoundService, 
  ImageService, 
  AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule { 

}