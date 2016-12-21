import {StoreModule} from '@ngrx/store'
import {userReducer} from './user';

export const store = StoreModule.provideStore({user: userReducer});