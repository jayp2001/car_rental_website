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
          <Route path='/bookCar/:id' element={<BookTaxi />} />
          <Route path='/carDetail/:id' element={<CarDetail />} />
          <Route path='/' element={<Carlist />} />
        </Routes>
      </BrowserRouter>
      <PageFooter/>
    </>
  );
}

export default App;
