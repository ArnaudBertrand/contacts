import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import {AppComponent} from './app.component';
import {CoreModule} from './core.module';
import {AppRoutingModule} from './app.routing';
import {MaterialModule} from '@angular/material';

const firebaseConfig = {
  apiKey: "AIzaSyBgY0bNe2BcqCA2HymybVnWmEEo1_w1Dgk",
  authDomain: "contacts-a2837.firebaseapp.com",
  databaseURL: "https://contacts-a2837.firebaseio.com",
  storageBucket: "contacts-a2837.appspot.com",
  messagingSenderId: "1060950974043",
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }),
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
