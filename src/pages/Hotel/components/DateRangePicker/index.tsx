import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { TextField } from '@material-ui/core';
import 'react-datepicker/dist/react-datepicker.css';

import { styles } from './styles';
interface Props {
  setDate?: (date: IDateRangePicker) => void;
}

export interface IDateRangePicker {
  startDate: Date;
  endDate: Date;
}

Date.prototype.addDays = function(days: number) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
// i know, it's not the best way, but import momentjs for this project or
// something like that not the best idea as well

const today = new Date();

const DateRangePicker: React.FC<Props> = (props) => {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(startDate);

  const classes = styles(props);

  const handleStartDate = (date) => {
    setStartDate(date);
    const start = new Date(date).getTime();
    const end = new Date(endDate).getTime();
    if (end <= start) {
      setEndDate(date);
    }
  };
  return (
    <div className={'DateRangePicker ' + classes.root}>
      <div className={classes.dateRange}>
        <DatePicker
          customInput={
            <TextField
              required
              InputProps={{
                readOnly: true
              }}
              label="Check In date"
              classes={{ root: classes.w100 }}
              type="text"
            />
          }
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={handleStartDate}
          minDate={today}
        />
      </div>
      <div className={classes.dateRange}>
        <DatePicker
          customInput={
            <TextField
              required
              InputProps={{
                readOnly: true
              }}
              label="Check Out date"
              classes={{ root: classes.w100 }}
              type="text"
            />
          }
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={setEndDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
