import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './auth.guard';
import {LayoutComponent} from './layout/layout.component';

const appRoutes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: LayoutComponent,
  children: [
    {path: 'add', loadChildren: 'app/contacts/add/add.module#AddModule'},
    {path: '', loadChildren: 'app/contacts/search/search.module#SearchModule'},
  ],
}]

export const contactsRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
