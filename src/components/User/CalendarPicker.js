import React from 'react';
import { Container } from 'react-bootstrap';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const CalendarPicker = (props) => {
  return (
    <Container>
      <Calendar
        className='font'
        value={props.selectedDate}
        onChange={props.handleSelectDate}
        colorPrimary='#9c88ff'
        inputPlaceholder='Select a day'
      />
      <p>Selected day: {props.selectedDate ? props.selectedDate.day + '/' + props.selectedDate.month + '/' + props.selectedDate.year : 'No Date Selected'}
      </p>
    </Container>
  );
};

export default CalendarPicker;
