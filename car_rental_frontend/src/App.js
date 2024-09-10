import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import BookTaxi from './pages/bookTaxi/bookTaxi';
import './App.css';
import PageFooter from './pages/pageFooter/pageFooter';
import CarDetail from './pages/carDetailPage/carDetail';
import Carlist from './pages/carList/carList';
import Navbar from './pages/navBar/navBar';
import DeleteTaxiBooking from './pages/deleteTaxiBooking/deleteTaxiBooking';

function App() {
  return (
    <>

      <HashRouter >
        <Navbar />
        <Routes>
          <Route path='/car_rental_website' element={<Carlist />} />
          <Route path='/rentedCarList' element={<DeleteTaxiBooking />} />
          <Route path='/bookCar/:id' element={<BookTaxi />} />
          <Route path='/carDetail/:id' element={<CarDetail />} />
        </Routes>
      </HashRouter>
      <PageFooter />
    </>
  );
}

export default App;
