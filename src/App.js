import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Calendar from "./Calendar";
import Day from "./Day";
import Home from "./Home";
import AddPeople from "./components/AddPeople";
// import generateRandomAppointments from "./utils";
import generateRandomAppointments from "./components/GenerateRandomAppointments";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  returnAllPeople,
  addFirstName,
  addLastName,
  addPhoneNumber,
  addEmail,
  addBirthDate,
} from "./actions";

function App() {
  const AllPeopleInState = useSelector((state) => state.allPeopleReducer);
  const FirstNameState = useSelector((state) => state.inputboxFirstName);
  const LastNameState = useSelector((state) => state.inputboxLastName);
  const PhoneState = useSelector((state) => state.inputboxPhoneNumber);
  const EmailState = useSelector((state) => state.inputBoxEmail);
  const BirthDateState = useSelector((state) => state.inputBoxBirthDate);

  // console.log(AllPeopleInState);
  const appointments = generateRandomAppointments(50, AllPeopleInState);

  // const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
            <li>
              <Link to="managepeople">Manage People</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route
              path="/calendar"
              element={<Calendar appointments={appointments} />}
            />
            <Route
              path="/day"
              element={
                <Day
                  appointments={appointments.filter((app) => app.day === 1)}
                />
              }
            />
            <Route path="/" element={<Home />} />
            <Route
              path="managepeople"
              element={<AddPeople allPeople={AllPeopleInState} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
