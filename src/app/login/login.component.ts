import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFire, AuthProviders, AngularFireAuth} from 'angularfire2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public af: AngularFire, public router: Router) {}

  ngOnInit() {
    this.af.auth
      .filter(auth => auth !== null)
      .subscribe((auth) => { 
        console.log(auth);
        this.router.navigate(['/contacts']);
      });
  }

  login() {
    this.af.auth.login({provider: AuthProviders.Google});
  }
}
