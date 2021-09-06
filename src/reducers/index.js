import { combineReducers } from "redux";
import tripsReducer from './tripsReducer';

export default combineReducers({
    allTrips: tripsReducer
})