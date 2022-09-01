import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Calendar from "./Calendar";
import Day from "./Day";
import Home from "./Home";

import generateRandomAppointments from "./utils";

const appointments = generateRandomAppointments(70);

const App = () => (
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
              <Day appointments={appointments.filter((app) => app.day === 1)} />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  </Router>
);
export default App;
