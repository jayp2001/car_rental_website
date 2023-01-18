import "./carDetailCard.css";
import { useNavigate } from "react-router-dom";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState, useEffect } from "react";
function CarDetailCard(carData) {
  const [data, setData] = useState();
  useEffect(() => {
    setData(carData.carData);
  }, []);
  const navigate = useNavigate();
  const handleClickDetail = () => {
    const url = `car_rental_website/cardetail/${data.id}`;
    navigate(url);
  };
  const handleClickBook = () => {
    const url = `car_rental_website/bookCar/${data.id}`;
    navigate(url);
  };
  if (!data) return null;
  return (
    <div className="grid grid-cols-12 carDetailCardCaontainer" key={data.id}>
      <div className="col-span-2">
        <img className="image" src={`image/${data.car_image}.png`} />
      </div>
      <div></div>
      <div className="col-span-3">
        <div className="grid content-center h-full detailWrapper">
          <div className="carName">{data.car_name}</div>
          <div className="grid grid-cols-12 carShortDetailWrapper">
            <div className="col-span-5 carShortDetail">
              <ColorizeIcon style={{ fontSize: "15px" }} /> {data.car_color}
            </div>
            <div className="col-span-5 carShortDetail">
              <AirlineSeatReclineNormalIcon style={{ fontSize: "15px" }} />{" "}
              {data.car_seat_capicity}
              Seater
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid content-center h-full  text-center">
          <span className="rentPrice">
            <CurrencyRupeeIcon style={{ fontSize: "22px" }} />
            {data.rent_per_day}
          </span>
        </div>
      </div>
      <div></div>
      <div className="col-span-4">
        <div className="grid content-center pl-6 h-full">
          <div className="flex justify-around">
            <button
              className={`bookBtn ${
                data.car_available_status ? "" : "disableBtn"
              }`}
              onClick={data.car_available_status ? handleClickBook : null}
            >
              Book Now
            </button>
            <button className="datailBtn" onClick={handleClickDetail}>
              Details
            </button>
          </div>
          <span
            className={`alertMsg ${data.car_available_status ? "hidden" : ""}`}
          >
            &nbsp;&nbsp; Currently unavailable!
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarDetailCard;
