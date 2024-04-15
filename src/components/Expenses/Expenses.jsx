import React from 'react';

import './expenses.scss';

//components
import ReceiptCard from '../ReceiptCard/ReceiptCard';

//mockData
import mockDateData from '../../mockDateData';

function Expenses() {
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
            className="form-select form-select-sm shadow-none form-control"
            aria-label=".form-select-sm example"
          >
            <option>Select month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
          </select>
        </div>
        <div className="filterByYear ps-3">
          <select
            className="form-select form-select-sm shadow-none form-control"
            aria-label=".form-select-sm example"
          >
            <option>Select year</option>
            <option value="1">2023</option>
            <option value="2">2024</option>
          </select>
        </div>
      </div>
      <ReceiptCard yearData={mockDateData} />
    </div>
  );
}

export default Expenses;
