import api from 'core/api';
import { setHotels, setError } from '../actions/home';

export const getHotels = () => (dispatch) => {
  return api
    .get('hotels.json')
    .then((res) => dispatch(setHotels(res)))
    .catch((err) => dispatch(setError(err)));
};
