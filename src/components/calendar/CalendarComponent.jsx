import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../calendar/calendar.scss"

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CalendarComponent = ({calendarName, passDate}) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChangedDate = (date) => {
    setStartDate(date);
    passDate(date);
  }

  return (
    <Container className='calendar'>
        <div className="calendar--name">
            {calendarName}
        </div>
        <DatePicker 
            selected={startDate} 
            onChange={(date) => handleChangedDate(date)} 
            className="calendar--picker"/>
    </Container>
  );
};

export default CalendarComponent;