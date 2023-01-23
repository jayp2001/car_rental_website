
import types from "../types";

// const initialState = carListStatic;

export const carDataReducer = (state = {loading:false,cardata:[],bookedCar:[],carDataById:[],error:''},action) =>{
    switch(action.type){
        case types.carListRequest:
            return { loading: true }
        case types.carListSuccess:
            return { loading: false, cardata: action.payload };
        case types.carListFail:
            return { loading: false, error: action.payload };
        case types.bookDetailUpdateRequest:
            return { loading: true }
        case types.bookDetailUpdateSuccess:
            return { loading: false, };
        case types.bookDetailUpdateFail:
            return { loading: false, error: action.payload };
        case types.carListByIdRequest:
            return { loading: true }
        case types.carListByIdSuccess:
            return { loading: false, carDataById: action.payload };
        case types.carListByIdFail:
            return { loading: false, error: action.payload };
        case types.getBookedCar:
            return {bookedCar:action.payload}
        case types.deleteBooking:
            return {bookedCar:action.payload}
        default:
            return state;

    }
}

// export const carDataById = (state = {loading:false,cardata:[],error:''},action) =>{
//     switch(action.type){
//         case types.carListByIdRequest:
//             return { loading: true }
//         case types.carListByIdSuccess:
//             return { loading: false, cardata: action.payload };
//         case types.carListByIdFail:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// }