import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
