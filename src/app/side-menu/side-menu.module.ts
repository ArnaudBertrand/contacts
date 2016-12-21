import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared.module';
import {SideMenu} from './side-menu/side-menu.component';
import {UserInfo} from './user-info/user-info.component';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [SideMenu, UserInfo],
  exports: [SideMenu],
})
export class SideMenuModule { }
