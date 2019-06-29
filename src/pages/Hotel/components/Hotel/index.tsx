import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { IHotel } from 'interfaces/state/hotels';
import { styles } from './styles';
import DateRangePicker from '../DateRangePicker';
import Slider from '../Slider';
import Stars from 'common/components/Stars';

interface Props {
  hotel: IHotel;
}
const Hotel: React.FC<Props> = (props) => {
  const classes = styles(props);
  const { hotel } = props;
  return (
    <div className={'Hotel ' + classes.root}>
      <Container>
        <Paper>
          <div className={classes.wrapTitleHotel}>
            <Typography classes={{ h3: classes.titleHotel }} variant="h3">
              {hotel.name}
              <Stars stars={hotel.stars} />
            </Typography>
          </div>
          <Slider showIndicators={false} infiniteLoop={true} />
          <DateRangePicker />
        </Paper>
      </Container>
    </div>
  );
};

export default Hotel;
