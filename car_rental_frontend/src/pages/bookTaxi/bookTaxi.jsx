import "./bookTaxi.css"
import {useState} from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function BookTaxi(){
    const [formData,setFormData] = useState(
        {
            issueDate      : new Date().toISOString().slice(0, 10),
            returnDate     : new Date().toISOString().slice(0, 10)
        }
    )
    const handleIssueDateChange = (date) => {
        setFormData((prevState) => ({
            ...prevState,
            ["issueDate"]: new Date(date).toISOString().slice(0, 10),
            }))
      };
      const handleReturnDateChange = (date) => {
        setFormData((prevState) => ({
            ...prevState,
            ["returnDate"]: new Date(date).toISOString().slice(0, 10),
            }))
      };

      const onCloseDatePicker = () =>{
        setTimeout(() => {
            document.activeElement.blur();
        }, 0);
      }

      const [open, setOpen] = useState(false);
      const [openReturn, setOpenReturn] = useState(false);
    return(
        <div className="grid grid-rows-1">
            <div className="grid grid-cols-12">
                <div className="col-span-3 imagelogo">

                </div>
                <div className="col-span-9 formField">
                    <div className=" grid grid-rows-1">
                        <div className="grid grid-cols-12">
                            <div className="col-span-10 col-start-2 bookTaxiFormWrapper">
                                <div className="grid grid-cols-12">
                                    <div className="formHeader col-span-4">
                                        Booking details
                                    </div>
                                    <div className="col-span-4 col-start-8">
                                        
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 formFielsWrapper">
                                    <div className="col-span-5 fieldBox">
                                        <TextField id="standard-basic" 
                                        label="Name" 
                                        fullWidth 
                                        variant="standard" 
                                        placeholder="joe"
                                        inputProps={{style: {fontSize: 20}}} 
                                        InputLabelProps={{style: {fontSize: 20}}}
                                        />
                                    </div>
                                    <div className="col-span-5 col-start-7 fieldBox">
                                        <TextField id="standard-basic" 
                                            label="Contact number" 
                                            fullWidth 
                                            variant="standard"
                                            inputProps={{style: {fontSize: 20}}}
                                        InputLabelProps={{style: {fontSize: 20}}}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
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
                                            onClose={()=>{setOpen(false);onCloseDatePicker()}}
                                            textFieldStyle={{width: '100%'}}
                                            InputProps={{style:{ fontSize: 20,width:'100%'} }}
                                            InputLabelProps={{style: {fontSize: 20}}}
                                            label="Issue Date"
                                            required
                                            inputFormat="YYYY/MM/DD"
                                            value={new Date(formData.issueDate)}
                                            onChange={handleIssueDateChange}
                                            name="issueDate"
                                            renderInput={(params) => <TextField {...params} onClick={(e) => setOpen(true)} InputLabelProps={{style: {fontSize: 20}}} variant="standard" sx={{width: '100%'}}/>}
                                            />
                                        </LocalizationProvider>

                                    </div>
                                    <div className="col-span-5 col-start-7 fieldBox">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            open={openReturn}
                                            onOpen={() => setOpenReturn(true)}
                                            onClose={()=>{setOpenReturn(false);onCloseDatePicker()}}
                                            textFieldStyle={{width: '100%'}}
                                            InputProps={{style:{ fontSize: 20,width:'100%'} }}
                                            InputLabelProps={{style: {fontSize: 20}}}
                                            label="Return Date"
                                            required
                                            inputFormat="YYYY/MM/DD"
                                            value={new Date(formData.returnDate)}
                                            onChange={handleReturnDateChange}
                                            name="returnDate"
                                            renderInput={(params) => <TextField  {...params} onClick={(e) => setOpenReturn(true)}  variant="standard" InputLabelProps={{style: {fontSize: 20}}} sx={{width: '100%'}}/>}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 formFielsWrapper">
                                    <div className="col-span-3 backBtn inline-block align-middle">
                                            Back
                                    </div>
                                    <div className="col-span-3 col-start-9">
                                        <button className="bookBtn btnDisabled">
                                            Book Car
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BookTaxi;