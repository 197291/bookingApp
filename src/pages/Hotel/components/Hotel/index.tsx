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
import { text } from './text';

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
            <Typography classes={{ h2: classes.titleHotel }} variant="h2">
              {hotel.name}
            </Typography>
            <Stars stars={hotel.stars} />
          </div>

          <hr />
          <Typography gutterBottom={true} classes={{ h3: classes.city }} variant="h3">
            City: {hotel.city || 'Beatiful place'}
          </Typography>
          <Slider showIndicators={false} infiniteLoop={true} />
          <Typography gutterBottom={true} classes={{ body1: classes.description }} variant="body1">
            <strong>Description:</strong> {hotel.description + text}
          </Typography>
          <hr />
          <FormBooking handleSubmit={handleSubmit} handleSuccessSubmit={handleSuccessSubmit} />
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(Hotel);
