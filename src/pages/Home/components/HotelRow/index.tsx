import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import Stars from 'common/components/Stars';
import { IHotel } from 'interfaces/state/hotels';
import { styles as st } from './style';

interface Props {
  hotel: IHotel;
}

const HotelRow: React.FC<Props> = (props) => {
  const { hotel } = props;
  const styles = st(props);
  return (
    <Link to={`/hotels/${hotel.id}`}>
      <ListItem classes={{ root: styles.listItem }} divider={true}>
        <div className={styles.wrapPhoto}>
          <img
            className={styles.hotelPhoto}
            src={hotel.imagePreview || ' http://dummyimage.com/120'}
            alt="hotel"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.wrapTitleHotel}>
            <Typography title={hotel.name} classes={{ h2: styles.title }} variant="h2">
              {hotel.name}
            </Typography>
            <Stars stars={hotel.stars} />
          </div>
          <div className={styles.city}>{hotel.city}</div>
          <div>{hotel.description}</div>
        </div>
      </ListItem>
    </Link>
  );
};

export default HotelRow;
