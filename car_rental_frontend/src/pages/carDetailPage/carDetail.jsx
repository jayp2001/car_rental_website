import "./carDetail.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { carListStatic } from "../../assets/staticData/carList";
import { URL } from "../../assets/staticData/url";
import { useSelector, useDispatch } from "react-redux";
function CarDetail() {
  const data = useSelector((state) => state.carData);
  const { id } = useParams();
  const [carData, setCarData] = useState(data.filter((car) => car.id == id)[0]);
  const navigate = useNavigate();
  const handleClickBook = () => {
    const url = `/bookCar/${carData.id}`;
    navigate(url);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 col-start-3">
        <div className="grid grid-cols-12 carImgWrapper">
          <div className="col-span-7">
            <div className="carImg">
              <img className="image" src={carData.car_image} />
            </div>
          </div>
          <div className="col-span-5 carDetailWrapper">
            <div className="carName">{carData.car_name}</div>
            <div className="grid grid-cols-12 carShortDetailWrapper">
              <div className="col-span-3 carShortDetail">
                <ColorizeIcon style={{ fontSize: "15px" }} />{" "}
                {carData.car_color}
              </div>
              <div className="col-span-3 carShortDetail">
                <AirlineSeatReclineNormalIcon style={{ fontSize: "15px" }} />{" "}
                {carData.car_seat_capicity}
                Seater
              </div>
            </div>
            <div className="renDetail">
              Rent per day :
              <span className="rentPrice">
                <CurrencyRupeeIcon style={{ fontSize: "22px" }} />
                {carData.rent_per_day}
              </span>
            </div>
            <div className="bookbtnWrapper flex">
              <button
                className={`bookBtn ${
                  carData.car_available_status ? "" : "disableBtn"
                }`}
                onClick={carData.car_available_status ? handleClickBook : null}
              >
                Book Now
              </button>
              <div className="grid content-end">
                <span
                  className={`alertMsg ${
                    carData.car_available_status ? "hidden" : ""
                  }`}
                >
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
                carData.car_available_status ? "activeStatus" : "disabledStatus"
              }`}
            >
              {carData.car_available_status ? "Availbale" : "Not Available"}
            </div>
            <div className="carDetailText">{carData.car_number}</div>
            <div className="carDetailText">{carData.car_varient}</div>
            <div className="carDetailText">{carData.car_engine_detail}</div>
            <div className="carDetailText">{carData.car_other_information}</div>
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
            <div className="col-span-3 listContent">
              {carData.current_booking_detail.name}
            </div>
            <div className="col-span-3 listContent">
              {carData.current_booking_detail.phone_number}
            </div>
            <div className="col-span-3 listContent">
              {carData.current_booking_detail.car_issue_date}
            </div>
            <div className="col-span-3 listContent">
              {carData.current_booking_detail.car_return_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
