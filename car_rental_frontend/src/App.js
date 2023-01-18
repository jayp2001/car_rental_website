import React from 'react';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import BookTaxi from './pages/bookTaxi/bookTaxi';
import './App.css';
import PageFooter from './pages/pageFooter/pageFooter';
import CarDetail from './pages/carDetailPage/carDetail';
import Carlist from './pages/carList/carList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookTaxi />} />
          <Route path='/carDetail' element={<CarDetail />} />
          <Route path='/carList' element={<Carlist />} />
        </Routes>
      </BrowserRouter>
      <PageFooter/>
    </>
  );
}

export default App;
