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
      }
    ])
  ],
  declarations: [
    AppComponent,
    WolfsoundListComponent,
    WolfsoundHomeComponent,
    FormComponent,
    FileSelectDirective, 
    FileDropDirective, DetailViewComponent, LoginComponent, CallbackComponent,
  ],
  providers: [WolfsoundService, ImageService, AuthService],
  bootstrap: [AppComponent],
})

export class AppModule { 

}