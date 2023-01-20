
import { carListStatic } from "../assets/staticData/carList";

const initialState = carListStatic;

const changeData = (currentState,update) => {
    const data = currentState;
    const idOfData = update.id;
    var indexof;
    currentState.map((data,index)=>{
        if(data.id == idOfData){
            indexof = index;
        }
    })
    data[indexof].car_available_status = false;
    data[indexof].car_issue_date = update.car_issue_date;
    data[indexof].car_return_date = update.car_return_date;
    data[indexof].current_booking_detail.name = update.name;
    data[indexof].current_booking_detail.phone_number = update.phone_number;
    data[indexof].current_booking_detail.car_issue_date = update.car_issue_date;
    data[indexof].current_booking_detail.car_return_date = update.car_return_date;
    return data;
    
}

const carDataReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'BOOK_CAR':
            // state[0].car_name='jay'
            // return state;
            return changeData(state,action.payload)
        case 'DECREMENT':
            return state-1;
            default:
      return state;

    }
}

export default carDataReducer;