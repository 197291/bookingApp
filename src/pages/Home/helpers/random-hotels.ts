import { IHotel } from 'interfaces/state/hotels';

export const randomHotels = (hotels: IHotel[]): IHotel[] => {
  const NUMBER_RANDOM_HOTELS = 5;
  const max = hotels.length - NUMBER_RANDOM_HOTELS;
  const startIndex = Math.floor(Math.random() * max);
  return hotels.slice(startIndex, startIndex + NUMBER_RANDOM_HOTELS);
};
