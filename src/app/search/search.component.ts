import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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

  getFiltered() {
    if (!this.filter.length) {
      return this.contacts;
    }
    return this.contacts.filter(contact => contact.firstName.match(this.filter));
  }
}
