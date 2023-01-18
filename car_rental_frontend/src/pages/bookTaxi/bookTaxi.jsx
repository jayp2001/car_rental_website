import "./bookTaxi.css";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { carListStatic } from "../../assets/staticData/carList";
import { URL } from "../../assets/staticData/url";
function BookTaxi() {
  const [formData, setFormData] = useState({
    issueDate: new Date().toISOString().slice(0, 10),
    returnDate: new Date().toISOString().slice(0, 10),
  });
  const handleIssueDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      ["issueDate"]: new Date(date).toISOString().slice(0, 10),
    }));
  };
  const handleReturnDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      ["returnDate"]: new Date(date).toISOString().slice(0, 10),
    }));
  };

  const onCloseDatePicker = () => {
    setTimeout(() => {
      document.activeElement.blur();
    }, 0);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const { id } = useParams();
  const [carData, setCarData] = useState(
    carListStatic.filter((car) => car.id == id)[0]
  );
  const [open, setOpen] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);

  const navigate = useNavigate();
  const handleClickBack = () => {
    const url = `car_rental_website/`;
    navigate(url);
  };

  return (
    <div className="grid grid-rows-1 min-h-screen">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-3 imagelogo h-full">
          <img src={`${URL}image/bookCarPageImg.png`} className="modalImg" />
        </div>
        <div className=" grid col-span-9 formField content-center">
          <div className=" grid grid-rows-1">
            <div className="grid grid-cols-12">
              <div className="col-span-10 col-start-2 bookTaxiFormWrapper">
                <div className="grid grid-cols-12">
                  <div className="formHeader col-span-4">Booking details</div>
                  <div className="col-span-4 col-start-8"></div>
                </div>
                <div className="grid grid-cols-12 formFielsWrapper">
                  <div className="col-span-5 fieldBox">
                    <TextField
                      id="standard-basic"
                      label="Name"
                      fullWidth
                      variant="standard"
                      placeholder="joe"
                      inputProps={{ style: { fontSize: 20 } }}
                      InputLabelProps={{ style: { fontSize: 20 } }}
                    />
                  </div>
                  <div className="col-span-5 col-start-7 fieldBox">
                    <TextField
                      id="standard-basic"
                      label="Contact number"
                      fullWidth
                      variant="standard"
                      inputProps={{ style: { fontSize: 20 } }}
                      InputLabelProps={{ style: { fontSize: 20 } }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 formFielsWrapper">
                  <div className="col-span-5 fieldBox">
                    {/* <TextField id="standard-basic" 
                                        label="Name" 
                                        fullWidth 
                                        variant="standard"
                                        inputProps={{style: {fontSize: 20}}} 
                                        InputLabelProps={{style: {fontSize: 20}}}
                                        /> */}

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => {
                          setOpen(false);
                          onCloseDatePicker();
                        }}
                        textFieldStyle={{ width: "100%" }}
                        InputProps={{ style: { fontSize: 20, width: "100%" } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        label="Issue Date"
                        required
                        inputFormat="YYYY/MM/DD"
                        value={new Date(formData.issueDate)}
                        onChange={handleIssueDateChange}
                        name="issueDate"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            onClick={(e) => setOpen(true)}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            variant="standard"
                            sx={{ width: "100%" }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="col-span-5 col-start-7 fieldBox">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        open={openReturn}
                        onOpen={() => setOpenReturn(true)}
                        onClose={() => {
                          setOpenReturn(false);
                          onCloseDatePicker();
                        }}
                        textFieldStyle={{ width: "100%" }}
                        InputProps={{ style: { fontSize: 20, width: "100%" } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        label="Return Date"
                        required
                        inputFormat="YYYY/MM/DD"
                        value={new Date(formData.returnDate)}
                        onChange={handleReturnDateChange}
                        name="returnDate"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            onClick={(e) => setOpenReturn(true)}
                            variant="standard"
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            sx={{ width: "100%" }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="grid grid-cols-12 formFielsWrapper">
                  <div
                    className="col-span-3 backBtn inline-block align-middle"
                    onClick={handleClickBack}
                  >
                    Back
                  </div>
                  <div className="col-span-3 col-start-9">
                    <button
                      className="bookBtn btnDisabled"
                      onClick={handleClickOpen}
                    >
                      Book Car
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Dialog
          open={openModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="grid grid-cols-12 confirmModal">
                <div className="col-span-4">
                  <img
                    src={`${URL}image/confirmationModalImg.png`}
                    className="modalImg"
                  ></img>
                </div>
                <div className="col-span-8">
                  <div className="confirmMessage">
                    <div className="confirmMessageTitle">
                      Booking Confirmed !
                    </div>
                    <div className="confirmMessageDetails">
                      <div className="messageDescription">
                        You have booked &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <span className="detailOfCar"> {carData.car_name}</span>
                      </div>
                      <div className="messageDescription">
                        From the duration &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <span className="detailOfCar">
                          {" "}
                          {formData.issueDate} - {formData.returnDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={handleClose} className="modalActionBtn">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default BookTaxi;
