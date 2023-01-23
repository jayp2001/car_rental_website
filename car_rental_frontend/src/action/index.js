import types from '../types';
import axios from "axios";
import {URL} from './const'

export const bookCar = (updatedData) => async(dispatch) =>{
    try {
        dispatch({
          type: types.bookDetailUpdateRequest,
        });
        
        const { data } = await axios.post(`${URL}/car/addBookingDetail`,updatedData);
    
        dispatch({
          type: types.bookDetailUpdateSuccess,
          payload: data,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: types.bookDetailUpdateFail,
          payload: message,
        });
      }
};

export const getCarList= () => async(dispatch) =>{
    try {
        dispatch({
          type: types.carListRequest,
        });
    
        const { data } = await axios.get(`${URL}/car/get/`);
    
        dispatch({
          type: types.carListSuccess,
          payload: data,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: types.carListFail,
          payload: message,
        });
      }
};

export const getDataById = (_id)=> async(dispatch) =>{
    try {
        dispatch({
          type: types.carListByIdRequest,
        });
        const { data } = await axios.get(`${URL}/car/getById/?_id=${_id}`);
    
        if(data && data.current_booking_detail && data.current_booking_detail.car_issue_date && data.current_booking_detail.car_return_date){
          const issueDate = new Date(data.current_booking_detail.car_issue_date).toJSON().slice(0, 10);
          const returnDate = new Date(data.current_booking_detail.car_return_date).toJSON().slice(0, 10);
          data.current_booking_detail.car_issue_date = issueDate;
          data.current_booking_detail.car_return_date = returnDate
        }

        dispatch({
          type: types.carListByIdSuccess,
          payload: data,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: types.carListByIdFail,
          payload: message,
        });
      }
};

export const getBookedCar = () => async(dispatch) =>{
  var { data } = await axios.get(`${URL}/car/get/`);
  data = data.filter((obj) => obj.current_booking_detail.name != null)
  dispatch({
    type: types.getBookedCar,
    payload: data ? data : [],
  });
}

export const deleteBooking = (_id) => async(dispatch)=>{
  var { data } = await axios.get(`${URL}/car/deleteBookingDetails/?_id=${_id}`);
  var { data } = await axios.get(`${URL}/car/get/`);
  data = data.filter((obj) => obj.current_booking_detail.name != null)
  dispatch({
    type: types.getBookedCar,
    payload: data ? data : [],
  }
  )
}

