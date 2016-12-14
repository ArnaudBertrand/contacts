import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';

const firebaseConfig = {
  apiKey: "AIzaSyBgY0bNe2BcqCA2HymybVnWmEEo1_w1Dgk",
  authDomain: "contacts-a2837.firebaseapp.com",
  databaseURL: "https://contacts-a2837.firebaseio.com",
  storageBucket: "contacts-a2837.appspot.com",
  messagingSenderId: "1060950974043",
}
@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
