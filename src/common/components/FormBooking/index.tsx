import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

import DateRangePicker, { IDateRangePicker } from 'pages/Hotel/components/DateRangePicker';
import Modal from 'common/components/Modal';
import { IFormBooking } from 'interfaces/state/form';
import { styles } from './styles';

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
  const [openTips, toggleTips] = useState(false);
  const [dateRange, setDateRange] = useState<IDateRangePicker>({
    startDate: new Date(),
    endDate: new Date()
  });

  const isInvalid = () => {
    return (
      !firstname.trim() || !lastname.trim() || !guests || !dateRange.startDate || !dateRange.endDate
    );
  };

  const toggleShowError = () => {
    toggleTips(true);
    setTimeout(() => {
      toggleTips(false);
    }, 3000);
  };

  const handleSubmit = () => {
    if (!isInvalid()) {
      setVisibility(true);
      props.handleSubmit({
        firstname,
        lastname,
        guests,
        ...dateRange
      });
    } else {
      toggleShowError();
    }
  };

  const handleClose = () => {
    setVisibility(false);
    if (props.handleSuccessSubmit) {
      props.handleSuccessSubmit();
    }
  };

  const validNumber = (val: string) => (val.startsWith('0') || +val < 1 || !val ? '1' : val);
  return (
    <form
      name="form-booking"
      onSubmit={(e) => e.preventDefault()}
      className={'FormBooking ' + classes.root}
    >
      <h3 style={{ fontSize: 18 }}>Book your hotel!</h3>
      <DateRangePicker setDate={setDateRange} />
      <TextField
        label="Firstname"
        helperText="Required*"
        margin="normal"
        variant="outlined"
        className={classes.input}
        value={firstname}
        onChange={(e) => setFirstName(e.target.value.trim())}
      />
      <TextField
        label="Lastname"
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
      {openTips && (
        <Typography classes={{ root: classes.error }}>Please, fill all fields</Typography>
      )}
      <Modal handleClose={handleClose} isOpen={isOpen} />
    </form>
  );
};

export default FormBooking;
