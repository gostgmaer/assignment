import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FontawesomeObject} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { UserModule } from './user/user.module';
import {ServerModule} from './server/server.module';
import { UicomponentModule } from './uicomponent/uicomponent.module';
//import { UserModule } from './user/user.module'; */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    ServerModule,
    UserModule,
    UicomponentModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
