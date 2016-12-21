import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {SharedModule} from '../shared.module';
import {loginRouting} from './login.routing';

@NgModule({
  imports: [SharedModule, loginRouting],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
