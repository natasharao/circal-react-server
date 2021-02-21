import React from 'react';
import { Container } from 'react-bootstrap';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const CalendarPicker = (props) => {
  // props.value, props.onBlur and props.onChange are all used to sync
  // Calender picker with react-form-hooks

  return (
    <Container>
      <Calendar
        className='font'
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        colorPrimary='#9c88ff'
        inputPlaceholder='Select a day'
      />
      <p>Selected day: {props.value ? props.value.month + '/' + props.value.day + '/' + props.value.year : 'No Date Selected'}
      </p>
    </Container>
  );
};

export default CalendarPicker;
