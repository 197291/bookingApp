import { createSelector } from 'reselect';

import { IStore } from 'interfaces/state/store';
import { randomHotels } from 'pages/Home/helpers/random-hotels';

const getHotels = (state: IStore) => state.home.hotels;
const getSearchValue = (state: IStore) => state.home.search;

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
