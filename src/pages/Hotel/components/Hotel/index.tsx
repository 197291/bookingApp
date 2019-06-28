import React from 'react';

import { Container } from '@material-ui/core';
import { IHotel } from 'interfaces/state/hotels';
interface Props {
  hotel: IHotel;
}
const Hotel: React.FC<Props> = ({ hotel }) => {
  // there is could be another way for passing id (redux or new context api e.g.)

  return (
    <div className="Hotel">
      <Container>
        <h2>{hotel.name}</h2>
      </Container>
    </div>
  );
};

export default Hotel;
