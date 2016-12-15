import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path: 'contacts/add', loadChildren: 'app/add-contact/add-contact.module#AddContactModule'},
    {path: '', loadChildren: 'app/search/search.module#SearchModule', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
