import React from 'react';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import BookTaxi from './pages/bookTaxi/bookTaxi';
import './App.css';
import PageFooter from './pages/pageFooter/pageFooter';
import CarDetail from './pages/carDetailPage/carDetail';
import Carlist from './pages/carList/carList';
import Navbar from './pages/navBar/navBar';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='http://jayp2001.github.io/car_rental_website/' element={<Carlist />} />
          <Route path='http://jayp2001.github.io/car_rental_website/bookCar/:id' element={<BookTaxi />} />
          <Route path='http://jayp2001.github.io/car_rental_website/:id' element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
      <PageFooter/>
    </>
  );
}

export default App;