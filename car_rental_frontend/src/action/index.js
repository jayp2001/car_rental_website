import types from '../types';
import axios from "axios";

export const bookCar = (updatedData) => async(dispatch) =>{
    try {
        dispatch({
          type: types.bookDetailUpdateRequest,
        });
    
        const { data } = await axios.post('http://localhost:3600/car/addBookingDetail',updatedData);
    
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
    
        const { data } = await axios.get('http://localhost:3600/car/get/');
    
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
        const { data } = await axios.get(`http://localhost:3600/car/getById/?_id=${_id}`);
    
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

