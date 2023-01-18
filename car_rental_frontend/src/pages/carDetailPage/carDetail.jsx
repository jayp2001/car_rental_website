import "./carDetail.css";
import { useState } from "react";
import carImg from "../../assets/image/carImg1.png";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
function CarDetail() {
  const [status, setStatus] = useState(false);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 col-start-3">
        <div className="grid grid-cols-12 carImgWrapper">
          <div className="col-span-7">
            <div className="carImg">
              <img className="image" src={carImg} />
            </div>
          </div>
          <div className="col-span-5 carDetailWrapper">
            <div className="carName">Hyundai Grand i10</div>
            <div className="grid grid-cols-12 carShortDetailWrapper">
              <div className="col-span-3 carShortDetail">
                <ColorizeIcon style={{ fontSize: "15px" }} /> White
              </div>
              <div className="col-span-3 carShortDetail">
                <AirlineSeatReclineNormalIcon style={{ fontSize: "15px" }} /> 4
                Seater
              </div>
            </div>
            <div className="renDetail">
              Rent per day :
              <span className="rentPrice">
                <CurrencyRupeeIcon style={{ fontSize: "22px" }} />
                350
              </span>
            </div>
            <div className="bookbtnWrapper flex">
              <button className={`bookBtn ${status ? "" : "disableBtn"}`}>
                Book Now
              </button>
              <div className="grid content-end">
                <span className={`alertMsg ${status ? "hidden" : ""}`}>
                  &nbsp;&nbsp; Currently unavailable!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="carDetails">
          <div className="carDetailHeader">
            Car details
            <hr className="hrLine" />
          </div>
          <div className="carDetailContentWrapper">
            <div
              className={`carStatusDisplay ${
                status ? "activeStatus" : "disabledStatus"
              }`}
            >
              {status ? "Availbale" : "Not Available"}
            </div>
            <div className="carDetailText">Vehicle Number: 18 D 4356</div>
            <div className="carDetailText">Petrol Car</div>
            <div className="carDetailText">
              1.2 Kappa Dual VTVT BS6 Petrol Engine
            </div>
            <div className="carDetailText">
              Hyundai GRAND i10 NIOS comes with Wonder Warranty options of upto
              5 years Std. Customer can choose any warranty option as per his
              driving requirement at the time of new vehicle delivery. From a
              strong body structure to Standard Dual airbags and ABS with EBD,
              maximum care has been taken to integrate a plethora of safety
              features
            </div>
          </div>
        </div>
        <div className="carCurrentCarBooking">
          <div className="carDetailHeader">
            Current Booking
            <hr className="hrLine" />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3 listHeader">NAME</div>
            <div className="col-span-3 listHeader">PHONE NUMBER</div>
            <div className="col-span-3 listHeader">ISSUE DATE</div>
            <div className="col-span-3 listHeader">RETURN DATE</div>
          </div>
          <div className="grid grid-cols-12 mt-6">
            <div className="col-span-3 listContent">Jon Doe</div>
            <div className="col-span-3 listContent">+91 7905654483</div>
            <div className="col-span-3 listContent">25/01/2020</div>
            <div className="col-span-3 listContent">28/01/2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
