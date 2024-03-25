import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

//components
import Navbar from './components/Navbar/Navbar';
import Budget from './components/Budget/Budget';
import CurrentPrices from './components/CurrentPrices/CurrentPrices';
import Expenses from './components/Expenses/Expenses';
import User from './components/User/User';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/current-prices" element={<CurrentPrices />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
