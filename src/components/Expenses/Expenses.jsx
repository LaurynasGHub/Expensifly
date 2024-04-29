import React from 'react';

import './expenses.scss';

//components

import ExpenseCard from '../ExpenseCard/ExpenseCard';

function Expenses() {
  return (
    <div className="receiptsPage">
      <div className="receiptsText p-3">
        <h2>Expenses</h2>
        <p className="py-3">
          Welcome to the expenses page, here you can find all your expenses,
          also you can add your own expenses.
        </p>

        <ExpenseCard />
      </div>
    </div>
  );
}

export default Expenses;
