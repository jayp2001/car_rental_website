import {carDataReducer} from "./reducer/carData";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const allReducers = combineReducers ({
    carData: carDataReducer,
});
const middleware = [thunk];
const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;