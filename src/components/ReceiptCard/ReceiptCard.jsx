import React, { useRef, useState } from 'react';

// import { findJsonElement } from '../../utils/findJsonElementUtil';
import { dayOrdinal } from '../../utils/dayOrdinalUtil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './receiptCard.scss';

import ExpenseCard from '../ExpenseCard/ExpenseCard';

function ReceiptCard({ yearData }) {
  const [dates, setDates] = useState(yearData);
  const [inputValidation, setInputValidation] = useState(true);
  const [expenseData, setExpenseData] = useState([]);

  const year = useRef(null);
  const month = useRef(null);
  const day = useRef(null);
  const shop = useRef(null);

  function addNewDate() {
    setInputValidation(true);
    const dateYear = Number(year.current.value);
    const dateMonth = String(month.current.value);
    const dateDay = Number(day.current.value);
    const dateShop = String(shop.current.value);

    function isNumber(value) {
      return typeof value === 'number' && !isNaN(value);
    }

    //if date is NOT a number then print log
    if (!isNumber(dateYear) || dateYear === 0) {
      console.log('date provided is not valid');
      setInputValidation(false);
      return;
    }
    //if day is NOT a number then print log
    else if (!isNumber(dateDay) || dateDay === 0) {
      console.log('day provided is not valid');
      setInputValidation(false);
      return;
      //if shop is empty then print log
    } else if (dateShop === '') {
      console.log('shop provided is invalid');
      setInputValidation(false);
      return;
    }

    const newDates = [
      ...dates,

      {
        year: dateYear,
        month: dateMonth,
        day: dateDay,
        shop: dateShop,
      },
    ];

    setDates(newDates);
  }

  function showExpenseData(id) {
    console.log('----showExpenseData----');

    // setExpenseData(newExpenses);
  }

  return (
    <div className="receiptCard">
      <div className="searchBar">
        <div className="input-group p-3">
          {/* <p>Enter search parameters</p> */}
          <input
            type="text"
            id="year"
            ref={year}
            className="form-control"
            placeholder="Year"
            aria-label="Year"
            aria-describedby="basic-addon2"
          />

          <select id="month" ref={month} name="month" className="form-control">
            <option value="December">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="8August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <input
            type="number"
            className="form-control"
            id="day"
            ref={day}
            placeholder="Day"
            aria-label="Day"
            aria-describedby="basic-addon3"
          />
          <input
            type="text"
            className="form-control"
            id="shop"
            ref={shop}
            placeholder="Shop"
            aria-label="Shop"
            aria-describedby="basic-addon2"
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={addNewDate}
            >
              <FontAwesomeIcon className="buttonSvg" icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>

      <div className="receiptCardElement mx-3">
        {/* should show shopname,month,day,shop etc. more filters */}
        <ExpenseCard
          shopName={'Maxima'}
          month={'May'}
          data={expenseData}
          setData={setExpenseData}
        />
      </div>
    </div>
  );
}

export default ReceiptCard;
