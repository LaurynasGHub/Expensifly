import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';

//components
import Navbar from './components/Navbar/Navbar';
import Budget from './components/Budget/Budget';
import CurrentPrices from './components/CurrentPrices/CurrentPrices';
import Expenses from './components/Expenses/Expenses';
import User from './components/User/User';

//TODO
//change default opening path, now opens to empty window
//expenseCard doesn't rerender expenses

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/current-prices" element={<CurrentPrices />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Navigate to="/expenses" />} />
      </Routes>
    </>
  );
}

export default App;
