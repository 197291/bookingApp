import { IHotel } from './hotels';
import { AxiosError } from 'axios';

export interface IRHome {
  hotels: IHotel[];
  search: string;
  error: AxiosError;
}
