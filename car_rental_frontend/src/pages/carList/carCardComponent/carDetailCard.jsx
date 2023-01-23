import "./carDetailCard.css";
import { useNavigate } from "react-router-dom";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState, useEffect } from "react";
import { URL } from "../../../assets/staticData/url";
import { useLocation } from 'react-router-dom';
import { deleteBooking } from '../../../action/index'
import { useDispatch } from "react-redux";
function CarDetailCard(props) {

  const dispatch = useDispatch();
  var isDelete;
  const location = useLocation()
  if (location.pathname === "/car_rental_website") {
    isDelete = false;
  }
  else {
    isDelete = true;
  }
  const [data, setData] = useState();
  useEffect(() => {
    setData(props.carData);
  }, []);
  const navigate = useNavigate();
  const handleClickDetail = () => {
    const url = `/cardetail/${data._id}`;
    navigate(url);
  };
  const handleClickBook = () => {
    const url = `/bookCar/${data._id}`;
    navigate(url);
  };
  // const handleDelete = (_id) => {
  //   dispatch(deleteBooking(_id));
  // }

  console.log(isDelete);
  if (!data) return null;
  return (
    <div className="grid grid-cols-12 carDetailCardCaontainer" key={data._id}>
      <div className="col-span-2 imgWrapper">
        <img className="image" src={data.car_image} />
      </div>
      <div></div>
      <div className="col-span-3">
        <div className="grid content-center h-full detailWrapper">
          <div className="carName">{data.car_name}</div>
          <div className="grid grid-cols-12 carShortDetailWrapper">
            <div className="col-span-5 carShortDetail">
              {!isDelete ? <><ColorizeIcon style={{ fontSize: "15px" }} /> {data.car_color}</> : <>
                {data.current_booking_detail.name}
              </>}
            </div>
            <div className="col-span-5 carShortDetail">
              {!isDelete ?
                <><AirlineSeatReclineNormalIcon style={{ fontSize: "15px" }} />{" "}
                  {data.car_seat_capicity}
                  Seater</> :
                <>
                  {data.current_booking_detail.phone_number}
                </>
              }
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
            {isDelete ?
              <button
                className='bookBtn'
                onClick={() => props.handleDelete(data._id)}
              >
                Delete Booking
              </button>
              :
              <button
                className={`bookBtn ${data.car_available_status ? "" : "disableBtn"
                  }`}
                onClick={data.car_available_status ? handleClickBook : null}
              >
                Book Now
              </button>
            }
            <button className="datailBtn" onClick={handleClickDetail}>
              Details
            </button>
          </div>
          {!isDelete &&
            <span
              className={`alertMsg ${data.car_available_status ? "hidden" : ""}`}
            >
              &nbsp;&nbsp; Currently unavailable!
            </span>
          }
        </div>
      </div>
    </div>
  );
}

export default CarDetailCard;
