import { createSelector } from 'reselect';
import { IRootReducer } from 'interfaces/state/store';
import { randomHotels } from 'pages/Home/helpers/random-hotels';

const getHotels = (state: IRootReducer) => state.home.hotels;
const getSearchValue = (state: IRootReducer) => state.home.search;

export const getFilteringHotels = createSelector(
  getHotels,
  getSearchValue,
  (hotels, searchVal) => {
    return searchVal
      ? hotels.filter(
          (h) =>
            h.name.toLowerCase().startsWith(searchVal) || h.city.toLowerCase().startsWith(searchVal)
        )
      : randomHotels(hotels);
  }
);
