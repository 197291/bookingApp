import React from 'react';

import { styles } from './styles';
import DateRangePicker from 'pages/Hotel/components/DateRangePicker';
import { IFormBooking } from 'interfaces/state/form';

interface Props {
  handleSubmit(data: IFormBooking);
  handleAfterSubmit?: () => void;
}

const FormBooking: React.FC<Props> = (props) => {
  const classes = styles(props);

  return (
    <div className={'FormBooking ' + classes.root}>
      <DateRangePicker />
    </div>
  );
};

export default FormBooking;
