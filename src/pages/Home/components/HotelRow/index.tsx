import React from 'react';
import Container from '@material-ui/core/Container';
import { IHotel } from 'interfaces/state/hotels';

interface Props {
  hotel: IHotel;
}

const HotelRow: React.FC<Props> = (props) => {
  const { hotel } = props;
  return <Container>name: {hotel.name}</Container>;
};

export default HotelRow;
