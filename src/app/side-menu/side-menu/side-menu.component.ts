import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFire, AuthProviders, AngularFireAuth} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenu {
  user;

  constructor(public af: AngularFire, public router: Router) {
  }

  ngOnInit() {
    this.af.auth
      .filter(auth => auth === null)
      .subscribe(() => { this.router.navigate(['/login']); });

    this.user = this.af.auth
      .map(auth => {
        return auth ? auth.auth.providerData[0] : null;
      });
  }

  logout() {
    this.af.auth.logout();
  }
}
