import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AngularFireAuth} from 'angularfire2';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  user: AngularFireAuth;

  constructor(public af: AngularFire) {
    this.user = this.af.auth;
  }

  login() {
    this.af.auth.login({provider: AuthProviders.Google});
  }

  logout() {
    this.af.auth.logout();
  }
}
