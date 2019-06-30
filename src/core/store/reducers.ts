import { combineReducers } from 'redux';

import { IStore } from 'interfaces/state/store';
import { home } from 'pages/Home/state/reducers/home';

export const rootReducer = combineReducers<IStore>({
  home
});

export type AppState = ReturnType<typeof rootReducer>;
