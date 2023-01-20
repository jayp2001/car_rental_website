import carDataReducer from "./carData";
import {combineReducers} from "redux";

const allReducers = combineReducers ({
    carData: carDataReducer,
});

export default allReducers;