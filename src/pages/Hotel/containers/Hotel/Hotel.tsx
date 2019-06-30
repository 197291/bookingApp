import React from 'react';
import { Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ConnectedProps } from '.';
import HotelPage from 'pages/Hotel/components/Hotel';
import { styles } from './styles';

const Hotel: React.FC<ConnectedProps> = (props) => {
  // there is could be another way for passing id (redux or new context api e.g.)

  const classes = styles(props);
  if (!props.hotel) {
    props.getHotels();
    return (
      <div className={classes.rootSpinner}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div style={{ background: 'lightgrey' }} className="Hotel">
      <Container>
        <HotelPage hotel={props.hotel} />
      </Container>
    </div>
  );
};

export default Hotel;
