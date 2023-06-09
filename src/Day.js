import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

const Day = ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant }, index) => {
      if (patient === undefined) {
        debugger;
      }
      return (
        <AppointmentInDay
          time={time}
          patient={patient}
          dentist={dentist}
          assistant={assistant}
          key={index}
        />
      );
    }
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};

export default Day;
