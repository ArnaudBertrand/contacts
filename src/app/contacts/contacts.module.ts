import {NgModule}      from '@angular/core';

import {AuthGuard} from './auth.guard';
import {contactsRouting} from './contacts.routing';
import {LayoutComponent} from './layout/layout.component';
import {SideMenuModule} from '../side-menu/side-menu.module';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [contactsRouting, SharedModule, SideMenuModule],
  declarations: [LayoutComponent],
  providers: [AuthGuard],
})
export class ContactsModule {}
