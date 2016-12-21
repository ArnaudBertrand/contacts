import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {SharedModule} from '../../shared.module';
import {searchRouting} from './search.routing'

@NgModule({
  imports: [SharedModule, searchRouting],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
