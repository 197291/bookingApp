import React from 'react';
import Container from '@material-ui/core/Container';
import { IHotel } from 'interfaces/state/hotels';
import HotelRow from '../HotelRow';

interface Props {
  hotels: IHotel[];
}

const Hotels: React.FC<Props> = (props) => {
  const { hotels } = props;
  return (
    <div className="Hotels">
      <Container>
        {hotels.map((h) => (
          <HotelRow key={h.id} hotel={h} />
        ))}
      </Container>
    </div>
  );
};

export default Hotels;
