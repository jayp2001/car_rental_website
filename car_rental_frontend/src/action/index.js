export const bookCar = (updatedData) =>{
    return{
        type: 'BOOK_CAR',
        payload:updatedData
    }
};

export const geDataById = (id) =>{
    return{
        type: 'GET_DATA_BY_ID',
        payload:id
    }
};

