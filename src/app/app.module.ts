import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk';

import { WolfsoundService } from './wolfsound.service';
import { WolfsoundListComponent } from './wolfsound-list/wolfsound-list.component';
import { RouterModule }   from '@angular/router';
import { WolfsoundHomeComponent } from './wolfsound-home/wolfsound-home.component';
import { FormComponent } from './form/form.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

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
    ])
  ],
  declarations: [
    AppComponent,
    WolfsoundListComponent,
    WolfsoundHomeComponent,
    FormComponent,
    FileSelectDirective, 
    FileDropDirective
  ],
  providers: [WolfsoundService],
  bootstrap: [AppComponent],
})

export class AppModule { 

}