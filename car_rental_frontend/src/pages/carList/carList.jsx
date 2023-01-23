import CarDetailCard from "./carCardComponent/carDetailCard";
import "./carList.css";
import { useState, useEffect } from "react";
import { carListStatic } from "../../assets/staticData/carList";
import { useSelector, useDispatch } from "react-redux";
import { getCarList, getBookedCar, deleteBooking } from "../../action";
import { useLocation } from 'react-router-dom';
import axios from "axios";
function Carlist() {
  var isDelete;
  const location = useLocation()
  if (location.pathname === "/car_rental_website") {
    isDelete = false;
  }
  else {
    isDelete = true;
  }
  const dispatch = useDispatch();
  const dataList = useSelector((state) => isDelete ? state.carData.bookedCar : state.carData.cardata);

  console.log(">>", dataList)
  var cardata = dataList
  console.log(cardata)
  useEffect(() => {
    if (location.pathname === "/car_rental_website") {
      dispatch(getCarList());
    }
    else {
      dispatch(getBookedCar());
    }
  }, [])

  const handleDelete = (_id) => {
    if (window.confirm("Are You sure You want to delete booking....!")) {
      dispatch(deleteBooking(_id));
    }
    console.log(">>")
  }

  if (!cardata) {
    return null
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 col-start-2 carListContainer">
        <div className="carDetailHeader">
          {isDelete ? 'Rentad Car List' : 'Car for rent'}
          <hr className="hrLine" />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2">
            <div className="grid grid-cols-12 listHeaderWrapper">
              <div className="col-span-3"></div>
              <div className="col-span-3 listHeader">Car details</div>
              <div className="col-span-2 listHeader">Rent Per Day</div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid gap-4">
              {cardata?.map((data, index) => (
                <div key={data._id}>
                  <CarDetailCard carData={data}
                    handleDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carlist;
