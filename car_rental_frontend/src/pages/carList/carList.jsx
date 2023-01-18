import CarDetailCard from "./carCardComponent/carDetailCard";
import "./carList.css";
import { useState } from "react";
import { carListStatic } from "../../assets/staticData/carList";

function Carlist() {
  const [carData, setCarData] = useState(carListStatic);
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
              {carData.map((data, index) => (
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
