import CarDetailCard from "./carCardComponent/carDetailCard";
import "./carList.css";
import { useState,useEffect } from "react";
import { carListStatic } from "../../assets/staticData/carList";
import { useSelector, useDispatch } from "react-redux";
import { getCarList } from "../../action";
import axios from "axios";
function Carlist() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.carData);
  const { loading, error, cardata } = dataList;
useEffect(()=>{
  dispatch(getCarList());
},[dispatch])
if(!cardata){
  return null
}
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 col-start-2 carListContainer">
        <div className="carDetailHeader">
          Car for rent
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
                <CarDetailCard carData={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carlist;
