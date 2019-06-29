import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  setDate?: (date: { startDate: Date; endDate: Date }) => void;
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

  const handleStartDate = (date) => {
    setStartDate(date);
    const start = new Date(date).getTime();
    const end = new Date(endDate).getTime();
    if (end <= start) {
      setEndDate(date);
    }
  };
  return (
    <div className="DateRangePicker">
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={handleStartDate}
        minDate={today}
      />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        onChange={setEndDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateRangePicker;
