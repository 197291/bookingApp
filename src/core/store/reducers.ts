import { combineReducers } from 'redux';
import { IRootReducer } from 'interfaces/state/store';
import { home } from 'pages/Home/state/reducers/home';

export const rootReducer = combineReducers<IRootReducer>({
  home
});

export type AppState = ReturnType<typeof rootReducer>;
