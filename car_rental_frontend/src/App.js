import React from 'react';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import BookTaxi from './pages/bookTaxi/bookTaxi';
import './App.css';
import PageFooter from './pages/pageFooter/pageFooter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookTaxi />} />
        </Routes>
      </BrowserRouter>
      <PageFooter/>
    </>
  );
}

export default App;
