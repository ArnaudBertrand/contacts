import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AddContact} from './add.component';

const routes: Routes = [{
  path: '',
  component: AddContact,
}]

export const addContactRouting: ModuleWithProviders = RouterModule.forChild(routes);
