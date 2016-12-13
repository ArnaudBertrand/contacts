import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'MyContacts';

  contacts = [
    {
      firstName: 'John',
      lastName: 'Smith',
      company: 'Google',
      picture: 'http://www.convergences.org/wp-content/uploads/2015/08/Francois-Hollande1.jpg',
      notes: `Amazing guy blablabla`,
    },
    {
      firstName: 'Oriane',
      lastName: 'Lafond',
      company: 'Google',
      picture: 'http://www.convergences.org/wp-content/uploads/2015/08/Francois-Hollande1.jpg',
      notes: `Amazing guy blablabla`,
    },
  ];

  filter = '';

  user;

  constructor(public af: AngularFire) {
    this.user = this.af.auth;
  }

  getFiltered() {
    if (!this.filter.length) {
      return this.contacts;
    }
    return this.contacts.filter(contact => contact.firstName.match(this.filter));
  }

  login() {
    this.af.auth.login({provider: AuthProviders.Google});
  }

  logout() {
    this.af.auth.login;
  }
}
