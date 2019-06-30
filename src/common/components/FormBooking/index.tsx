import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import { styles } from './styles';
import DateRangePicker, { IDateRangePicker } from 'pages/Hotel/components/DateRangePicker';
import { IFormBooking } from 'interfaces/state/form';
import Modal from 'common/components/Modal';
import { TextField } from '@material-ui/core';

interface Props {
  handleSubmit(data: IFormBooking);
  handleSuccessSubmit?: () => void;
}

const FormBooking: React.FC<Props> = (props) => {
  const classes = styles(props);
  const [isOpen, setVisibility] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [guests, setNumberGuests] = useState<string>('1');
  const [dateRange, setDateRange] = useState<IDateRangePicker>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleSubmit = () => {
    setVisibility(true);
    props.handleSubmit({
      firstname,
      lastname,
      guests,
      ...dateRange
    });
  };

  const handleClose = () => {
    setVisibility(false);
    if (props.handleSuccessSubmit) {
      props.handleSuccessSubmit();
    }
  };

  const validNumber = (val: string) => (val.startsWith('0') || +val < 1 || !val ? '1' : val);
  return (
    <div className={'FormBooking ' + classes.root}>
      <DateRangePicker setDate={setDateRange} />
      <TextField
        label="Type Firstname"
        helperText="Required*"
        margin="normal"
        variant="outlined"
        className={classes.input}
        value={firstname}
        onChange={(e) => setFirstName(e.target.value.trim())}
      />
      <TextField
        label="Type Lastname"
        helperText="Required*"
        margin="normal"
        variant="outlined"
        className={classes.input}
        value={lastname}
        onChange={(e) => setLastName(e.target.value.trim())}
      />
      <TextField
        label="Number guests"
        value={guests}
        onChange={(e) => setNumberGuests(e.target.value)}
        type="number"
        className={classes.input}
        onBlur={(e) => setNumberGuests(validNumber(e.target.value.trim()))}
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
        variant="outlined"
      />
      <Button
        classes={{ root: classes.btn }}
        color="primary"
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Modal handleClose={handleClose} isOpen={isOpen} />
    </div>
  );
};

export default FormBooking;
