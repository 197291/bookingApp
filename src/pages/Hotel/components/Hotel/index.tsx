import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { IHotel } from 'interfaces/state/hotels';
import { styles } from './styles';

import Slider from '../Slider';
import Stars from 'common/components/Stars';
import FormBooking from 'common/components/FormBooking';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  hotel: IHotel;
}

const Hotel: React.FC<Props> = (props) => {
  const classes = styles(props);
  const { hotel } = props;
  const handleSubmit = (data) => {
    console.log('form data', data);
  };
  const handleSuccessSubmit = () => {
    props.history.push('/');
  };

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
          <FormBooking handleSubmit={handleSubmit} handleSuccessSubmit={handleSuccessSubmit} />
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(Hotel);
