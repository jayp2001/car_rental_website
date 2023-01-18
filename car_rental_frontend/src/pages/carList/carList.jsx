import CarDetailCard from "./carCardComponent/carDetailCard";
import "./carList.css";

function Carlist() {
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
            <CarDetailCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carlist;
