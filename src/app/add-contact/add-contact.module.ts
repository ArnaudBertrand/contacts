import {NgModule} from '@angular/core';
import {AddContactComponent} from './add-contact.component';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [AddContactComponent],
  exports: [AddContactComponent],
})
export class AddContactModule {}
