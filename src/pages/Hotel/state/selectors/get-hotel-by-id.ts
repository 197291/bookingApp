import { createSelector } from 'reselect';
import { IRootReducer } from 'interfaces/state/store';

const getHotels = (state: IRootReducer) => state.home.hotels;
const getId = (state: IRootReducer, props) => props.match.params.id;

export const getHotelById = createSelector(
  getHotels,
  getId,
  (hotels, id) => hotels.find((h) => h.id === id)
);
