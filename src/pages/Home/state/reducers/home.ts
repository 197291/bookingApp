import { IRHome } from 'interfaces/state/home';
import { GET_HOTELS_SUCCESS, GET_HOTELS_FAIL, SET_SEARCH_VALUE } from '../constants';

const initialState: IRHome = {
  hotels: [],
  search: '',
  error: null
};

export const home = (state = initialState, action): IRHome => {
  const { type, data } = action;
  switch (type) {
    case GET_HOTELS_SUCCESS:
      return { ...state, hotels: data, error: null };
    case GET_HOTELS_FAIL:
      return { ...state, error: data };
    case SET_SEARCH_VALUE:
      return { ...state, search: data };
    default:
      return state;
  }
};
