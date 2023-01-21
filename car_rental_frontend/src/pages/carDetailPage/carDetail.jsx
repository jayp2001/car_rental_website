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
import {getDataById} from '../../action'
function CarDetail() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.carData);
  const { carDataById } = dataList;
  const { id } = useParams();
  // const [carData, setCarData] = useState(cardata.filter((car) => car._id == id)[0]);
  const navigate = useNavigate();
  const handleClickBook = () => {
    const url = `/bookCar/${carDataById._id}`;
    navigate(url);
  };
  useEffect(()=>{
    dispatch(getDataById(id));
  },[dispatch])
  if(!carDataById){
    return null;
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 col-start-3">
        <div className="grid grid-cols-12 carImgWrapper">
          <div className="col-span-7">
            <div className="carImg">
              <img className="image" src={carDataById.car_image} />
            </div>
          </div>
          <div className="col-span-5 carDetailWrapper">
            <div className="carName">{carDataById.car_name}</div>
            <div className="grid grid-cols-12 carShortDetailWrapper">
              <div className="col-span-3 carShortDetail">
                <ColorizeIcon style={{ fontSize: "15px" }} />{" "}
                {carDataById.car_color}
              </div>
              <div className="col-span-3 carShortDetail">
                <AirlineSeatReclineNormalIcon style={{ fontSize: "15px" }} />{" "}
                {carDataById.car_seat_capicity}
                Seater
              </div>
            </div>
            <div className="renDetail">
              Rent per day :
              <span className="rentPrice">
                <CurrencyRupeeIcon style={{ fontSize: "22px" }} />
                {carDataById.rent_per_day}
              </span>
            </div>
            <div className="bookbtnWrapper flex">
              <button
                className={`bookBtn ${
                  carDataById.car_available_status ? "" : "disableBtn"
                }`}
                onClick={carDataById.car_available_status ? handleClickBook : null}
              >
                Book Now
              </button>
              <div className="grid content-end">
                <span
                  className={`alertMsg ${
                    carDataById.car_available_status ? "hidden" : ""
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
                carDataById.car_available_status ? "activeStatus" : "disabledStatus"
              }`}
            >
              {carDataById.car_available_status ? "Availbale" : "Not Available"}
            </div>
            <div className="carDetailText">{carDataById.car_number}</div>
            <div className="carDetailText">{carDataById.car_varient}</div>
            <div className="carDetailText">{carDataById.car_engine_detail}</div>
            <div className="carDetailText">{carDataById.car_other_information}</div>
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
              {carDataById.current_booking_detail?.name ?carDataById.current_booking_detail.name:''}
            </div>
            <div className="col-span-3 listContent">
              {carDataById.current_booking_detail?.phone_number}
            </div>
            <div className="col-span-3 listContent">
              {carDataById.current_booking_detail?.car_issue_date}
            </div>
            <div className="col-span-3 listContent">
              {carDataById.current_booking_detail?.car_return_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
