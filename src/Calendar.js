import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = (appointments) => {
  const appointmentsByDay = {};
  appointments.forEach((appointment) => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });
  return appointmentsByDay;
};

const Calender = ({ appointments }) => {
  const appointmentsByDay = divideByDay(appointments);
  if (!(1 in appointmentsByDay)) {
    // debugger;
  }

  const daysForCalendar = [];
  for (let iDay = 1; iDay <= 24; ++iDay) {
    // if (iDay in appointmentsByDay) {
    //   daysForCalendar.push(
    //     <DayInMonth appointments={appointmentsByDay[iDay]} key={iDay} />
    //   );
    // } else {
    //   daysForCalendar.push(<DayInMonth appointments={[]} key={iDay} />);
    // }
    daysForCalendar.push(
      <DayInMonth appointments={appointmentsByDay[iDay] || []} key={iDay} />
    );
  }
  // const daysInMonthJSX = Object.values(appointmentsByDay).map(
  //   (appointmentsInDay, index) => (
  //     <DayInMonth appointments={appointmentsInDay} key={index} />
  //   )
  // );

  return (
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysForCalendar}</div>
    </div>
  );
};
export default Calender;
