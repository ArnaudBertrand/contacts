import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AddContactModule} from './add-contact/add-contact.module';
import {SideMenuModule} from './side-menu/side-menu.module';
import {SearchModule} from './search/search.module';

@NgModule({
  imports: [
    AddContactModule,
    SideMenuModule,
    SearchModule,
    HttpModule,
  ],
  exports: [HttpModule, AddContactModule, SideMenuModule, SearchModule],
})
export class CoreModule { }
