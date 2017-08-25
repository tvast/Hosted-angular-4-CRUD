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
import { WolfsoundListComponent } from './wolfsound-list/wolfsound-list.component';
import { RouterModule }   from '@angular/router';
import { WolfsoundHomeComponent } from './wolfsound-home/wolfsound-home.component';
import { FormComponent } from './form/form.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DirectivesComponent } from './-directives/-directives.component';
import { GuardsComponent } from './-guards/-guards.component';
import { HelpersComponent } from './-helpers/-helpers.component';
import { ModelsComponent } from './-models/-models.component';
import { ServicesComponent } from './-services/-services.component';
import { HomeComponent } from './-home/-home.component';
import { LoginComponent } from './-login/-login.component';
import { RegisterComponent } from './-register/-register.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

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
      }
      { 
        path: '', component: HomeComponent, canActivate: [AuthGuard] 
      },
      { 
        path: 'login', component: LoginComponent 
      },
      { 
        path: 'register', component: RegisterComponent 
      },
      // otherwise redirect to home
      { 
        path: '**', redirectTo: '' 
      }
    ])
  ],
  declarations: [
    AppComponent,
    WolfsoundListComponent,
    WolfsoundHomeComponent,
    FormComponent,
     AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    FileSelectDirective, 
    FileDropDirective, DirectivesComponent, GuardsComponent, HelpersComponent, ModelsComponent, ServicesComponent, HomeComponent, LoginComponent, RegisterComponent,
  ],
  providers: [
  WolfsoundService, 
  ImageService,
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,
  // providers used to create fake backend
  fakeBackendProvider,
  MockBackend,
  BaseRequestOptions],
  bootstrap: [AppComponent],
})

export class AppModule { 

}