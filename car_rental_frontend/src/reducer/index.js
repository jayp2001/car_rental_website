import carDataReducer from "./carData";
import {combineReducers} from "redux";

const allReducers = combineReducers ({
    counter: carDataReducer,
});

export default allReducers;