import "./carDetailCard.css";
import { useNavigate } from "react-router-dom";
import carImg from "../../../assets/image/carImg1.png";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";
function CarDetailCard() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate("/cardetail");
  };

  return (
    <div className="grid grid-cols-12 carDetailCardCaontainer">
      <div className="col-span-2">
        <img className="image" src={carImg} />
      </div>
      <div></div>
      <div className="col-span-3">
        <div className="grid content-center h-full detailWrapper">
          <div className="carName">Hyundai Grand i10</div>
          <div className="grid grid-cols-12 carShortDetailWrapper">
            <div className="col-span-5 carShortDetail">
              <ColorizeIcon style={{ fontSize: "15px" }} /> White
            </div>
            <div className="col-span-5 carShortDetail">
              <AirlineSeatReclineNormalIcon style={{ fontSize: "15px" }} /> 4
              Seater
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid content-center h-full  text-center">
          <span className="rentPrice">
            <CurrencyRupeeIcon style={{ fontSize: "22px" }} />
            350
          </span>
        </div>
      </div>
      <div></div>
      <div className="col-span-4">
        <div className="grid content-center pl-6 h-full">
          <div className="flex justify-around">
            <button className={`bookBtn ${status ? "" : "disableBtn"}`}>
              Book Now
            </button>
            <button className="datailBtn" onClick={handleClickDetail}>
              Details
            </button>
          </div>
          <span className={`alertMsg ${status ? "hidden" : ""}`}>
            &nbsp;&nbsp; Currently unavailable!
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarDetailCard;
