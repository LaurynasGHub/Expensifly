import React from 'react';

import './expenses.scss';

//components
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const mockData = [
  { productName: 'Meat', productPrice: 5 },
  { productName: 'Apples', productPrice: 5 },
  { productName: 'Oranges', productPrice: 5 },
  { productName: 'Potatoes', productPrice: 45 },
  { productName: 'Bread', productPrice: 35 },
  { productName: 'Toilet paper', productPrice: 25 },
];

function Receipts() {
  return (
    <div className="receiptsPage">
      <div className="receiptsText mb-0 p-3">
        <h2>Expenses</h2>
        <p className="mb-0">
          Welcome to expenses page. Here you can find all your receipts that are
          automatically gathered from Your specified Gmail account, as well as
          other expenses that You add.
        </p>
      </div>
      <div className="filterOptions p-3">
        <div className="filterByMonth">
          <select
            class="form-select form-select-sm shadow-none form-control"
            aria-label=".form-select-sm example"
          >
            <option selected>Select month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
          </select>
        </div>
        <div className="filterByYear ps-3">
          <select
            class="form-select form-select-sm shadow-none form-control"
            aria-label=".form-select-sm example"
          >
            <option selected>Select year</option>
            <option value="1">2023</option>
            <option value="2">2024</option>
          </select>
        </div>
      </div>
      <div className="expensesWindow">
        <div className="receiptsWindow w-50 my-3 ms-3 p-1 border rounded">
          <div className="receiptCard border p-3 rounded">
            <h5>2023-May</h5>
          </div>
        </div>
        <div className="expensesBar w-50 my-3 me-3 p-1 border rounded">
          <ExpenseCard shopName={'Maxima'} month={'May'} data={mockData} />
        </div>
      </div>
    </div>
  );
}

export default Receipts;
