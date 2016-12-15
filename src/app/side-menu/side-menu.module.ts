import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {SideMenuComponent} from './side-menu.component';

@NgModule({
  imports: [SharedModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
