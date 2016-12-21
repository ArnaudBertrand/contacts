import {NgModule} from '@angular/core';
import {AddContact} from './add.component';
import {SharedModule} from '../../shared.module';
import {addContactRouting} from './add.routing';

@NgModule({
  imports: [SharedModule, addContactRouting],
  declarations: [AddContact],
  exports: [AddContact],
})
export class AddModule {}
