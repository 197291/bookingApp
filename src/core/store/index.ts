import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer, AppState } from './reducers';
// import api from '../api';

const devToolsExtension: string = 'devToolsExtension';
const devtools: any = window[devToolsExtension] ? window[devToolsExtension]() : (f: any) => f;
const middleware = applyMiddleware(thunk);
// const store: Store<AppState> = createStore(rootReducer, {}, middleware);
const store: Store<AppState> = middleware(devtools(createStore))(rootReducer);
window.ss = store;

export default store;
