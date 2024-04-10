import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './receiptCard.scss';

//mock date data
// import mockDateData from '../../mockDateData';
// const mockYearData = mockDateData;

function ReceiptCard({ yearData }) {
  const [dates, setDates] = useState(yearData);
  const [inputValidation, setInputValidation] = useState(true);

  const year = useRef(null);
  const month = useRef(null);
  const day = useRef(null);
  const shop = useRef(null);

  function mapDateData() {
    setInputValidation(true);
    const dateYear = Number(year.current.value);
    const dateMonth = String(month.current.value);
    const dateDay = Number(day.current.value);
    const dateShop = String(shop.current.value);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    function isNumber(value) {
      return typeof value === 'number' && !isNaN(value);
    }

    //if date is NOT a number then print log
    if (!isNumber(dateYear) || dateYear === 0) {
      console.log('date provided is not valid');
      setInputValidation(false);
      return;
    }
    //if months doesnt include dateMonth print log
    else if (!months.includes(dateMonth)) {
      console.log('month provided isn`t valid');
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

  function dayOrdinalSwitch(dayNo) {
    switch (dayNo) {
      case 1:
        return 'st';

      case 2:
        return 'nd';

      case 3:
        return 'rd';

      default:
        return 'th';
    }
  }

  //function that is called onClick on date button
  //shows that specific date expenses
  function showExpenseData() {
    //get id that is combined from shop name and date
    //get data by that id from backend/mock data
    //display it on the right
  }

  return (
    <div>
      <div className="receiptCard border p-3 rounded">
        {dates.map(({ year, month, day, shop }) => (
          <button
            key={`${year}${month}${day}${shop}`}
            className="dateButton mb-1"
          >
            {year} - {month} - {day}
            {dayOrdinalSwitch(day)} at "{shop}"
          </button>
        ))}
      </div>
      <div className="receiptCard border p-3 rounded">
        <p>Add new date</p>
        <div className="input-group my-3 mb-3">
          <input
            type="text"
            id="year"
            ref={year}
            className="form-control"
            placeholder="Year"
            aria-label="Year"
            aria-describedby="basic-addon2"
          />
          <input
            type="text"
            className="form-control"
            id="month"
            ref={month}
            placeholder="Month"
            aria-label="Month"
            aria-describedby="basic-addon2"
          />
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
              onClick={mapDateData}
            >
              <FontAwesomeIcon className="buttonSvg" icon={faPlus} />
            </button>
          </div>
        </div>
        {!inputValidation ? (
          <div className="inputErrorMessage">Date input is invalid!</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ReceiptCard;
