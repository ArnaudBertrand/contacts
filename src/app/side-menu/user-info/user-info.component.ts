import {Component, Input} from '@angular/core';
import {AngularFire, AuthProviders, FirebaseAuth} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfo {
  @Input() user: FirebaseAuth;
}