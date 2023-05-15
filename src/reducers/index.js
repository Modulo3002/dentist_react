import { combineReducers } from "redux";
import { allPeopleReducer } from "./allPeople";

const allReducers = combineReducers({ allPeopleReducer });

export default allReducers;
