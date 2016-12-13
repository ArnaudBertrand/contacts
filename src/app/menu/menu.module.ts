import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {MenuComponent} from './menu.component';

@NgModule({
  imports: [SharedModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
