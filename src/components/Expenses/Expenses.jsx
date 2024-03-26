import React from 'react';

import './expenses.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//mockData
import mockReceiptData from '../../mockReceiptData';

//components
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const mockData = mockReceiptData;

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
      <div className="expensesWindow">
        <div className="receiptsWindow w-50 my-3 ms-3 p-1 border rounded">
          <div className="receiptCard border p-3 rounded">
            <h5>2023-May</h5>
          </div>
          <div className="receiptCard border p-3 rounded">
            <div className="addButton">
              <div className="input-group my-3 mb-3">
                <input
                  type="text"
                  id="expenseName"
                  className="form-control"
                  placeholder="Year"
                  aria-label="Year"
                  aria-describedby="basic-addon2"
                />
                <input
                  type="text"
                  className="form-control"
                  id="expensePrice"
                  placeholder="Month"
                  aria-label="Month"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">
                    <FontAwesomeIcon className="buttonSvg" icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* button to add new expense date on click
          appears new window to insert date. then add empty expense bar with
          option to add items */}
        </div>
        <div className="expensesBar w-50 my-3 me-3 p-1 border rounded">
          <ExpenseCard shopName={'Maxima'} month={'May'} data={mockData} />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
