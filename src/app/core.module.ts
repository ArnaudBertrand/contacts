import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AddContactModule} from './add-contact/add-contact.module';
import {MenuModule} from './menu/menu.module';
import {SearchModule} from './search/search.module';

@NgModule({
  imports: [
    AddContactModule,
    MenuModule,
    SearchModule,
    HttpModule,
  ],
  exports: [HttpModule, AddContactModule, MenuModule, SearchModule],
})
export class CoreModule { }
