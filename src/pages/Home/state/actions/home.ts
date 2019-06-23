import { GET_HOTELS_SUCCESS, GET_HOTELS_FAIL } from '../constants';

export const setHotels = (hotels) => ({ type: GET_HOTELS_SUCCESS, data: hotels });
export const setError = (err) => ({ type: GET_HOTELS_FAIL, data: err });
