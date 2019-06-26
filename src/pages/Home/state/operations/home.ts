import api from 'core/api';
import { setHotels, setError } from '../actions/home';

export const getHotels = () => (dispatch) => {
  api
    .get('http://localhost:3000/hotels.json')
    .then((res) => dispatch(setHotels(res)))
    .catch((err) => dispatch(setError(err)));
};
