import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Receipts from './components/Receipts/Receipts';
import CurrentPrices from './components/CurrentPrices/CurrentPrices';
import Expenses from './components/Expenses/Expenses';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/current-prices" element={<CurrentPrices />} />
      </Routes>
    </>
  );
}

export default App;
