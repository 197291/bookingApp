import { createSelector } from 'reselect';

import { IStore } from 'interfaces/state/store';

const getHotels = (state: IStore) => state.home.hotels;
const getId = (state: IStore, props) => props.match.params.id;

export const getHotelById = createSelector(
  getHotels,
  getId,
  (hotels, id) => hotels.find((h) => h.id === id)
);
