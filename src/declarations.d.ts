import { Dispatch, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

/**
 * Redux behaviour changed by middleware, so overloads here
 */
declare module 'redux' {
  /**
   * Overload for bindActionCreators redux function, returns expects responses
   * from thunk actions
   */
  function bindActionCreators<M extends ActionCreatorsMapObject<any>>(
    actionCreators: M,
    dispatch: Dispatch
  ): {
    [N in keyof M]: ReturnType<M[N]> extends ThunkAction<any, any, any, any>
      ? (...args: Parameters<M[N]>) => ReturnType<ReturnType<M[N]>>
      : M[N]
  };
}

declare global {
  interface Window {
    ss: Store;
  }
}

window.ss = window.ss || {};
