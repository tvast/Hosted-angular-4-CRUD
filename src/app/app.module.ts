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
      }
    ])
  ],
  declarations: [
    AppComponent,
    WolfsoundListComponent,
    WolfsoundHomeComponent,
  ],
  providers: [WolfsoundService],
  bootstrap: [AppComponent],
})

export class AppModule { 

}

// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';
// import { HttpModule }    from '@angular/http';

// import { FormComponent } from './login/form.component';
// import { AppRoutingModule } from './app-routing.module';

// import { MasonryModule } from 'angular2-masonry';
// //component
// import { AppComponent }         from './app.component';
// import { BearComponent }   from './liste/bear.component';
// import { HomeComponent }  from './home/home.component';
// import { BearDetailComponent }  from './detail/bear-detail.component';
// import { visucanvasComponent }  from './visualizer/visucanvas.component'; 
// import { LandingPageComponent }  from './home/landingpage.component';
// import { AdminComponent }  from './admin/admin.component';
// import { LoginComponent }  from './login/login.component';
// import { visucanvasGreenComponent }  from './visualizer/greenvisualizer.component'; 
// //service
// import { BearService }          from './bear.service';

// import { UserService } from './user.service';
// import { LoggedInGuard } from './logged-in.guard';

// @NgModule({
//   imports: [
//   BrowserModule,
//   FormsModule,
//   HttpModule,
//     AppRoutingModule,
//     MasonryModule
//     ],
//     declarations: [
//     AppComponent,
//     BearComponent,
//     FormComponent,
//     HomeComponent,
//     BearDetailComponent,
//     LandingPageComponent,
//     visucanvasComponent,
//     AdminComponent,
//     LoginComponent,
//     visucanvasGreenComponent

//     ],
//     providers: [ BearService , UserService, LoggedInGuard ],
//     bootstrap: [ AppComponent ]
//   })
// export class AppModule { }
