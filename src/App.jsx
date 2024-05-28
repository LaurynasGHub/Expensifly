import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LogInContext } from './context/logInContext';

import './App.scss';

//components
import Navbar from './components/Navbar/Navbar';
import Budget from './components/Budget/Budget';
import CurrentPrices from './components/CurrentPrices/CurrentPrices';
import Expenses from './components/Expenses/Expenses';
import User from './components/User/User';

function App() {
  const { logIn } = useContext(LogInContext);
  return (
    <>
      <Navbar />
      <Routes>
        {logIn && <Route path="/expenses" element={<Expenses />} />}
        {logIn && <Route path="/budget" element={<Budget />} />}
        {logIn && <Route path="/current-prices" element={<CurrentPrices />} />}
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Navigate to="/user" />} />
      </Routes>
    </>
  );
}

export default App;
