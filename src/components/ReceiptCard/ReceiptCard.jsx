import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faPlus } from '@fortawesome/free-solid-svg-icons';

import './receiptCard.scss';

//mock date data
// import mockDateData from '../../mockDateData';
// const mockYearData = mockDateData;

function ReceiptCard({ yearData }) {
  const [dates, setDates] = useState(yearData);

  const year = useRef(null);
  const month = useRef(null);
  const day = useRef(null);

  function mapDateData() {
    // const dateYear = Number(year.current.value);
    const dateYear = year.current.value;
    // const dateMonth = String(month.current.value);
    const dateMonth = month.current.value;
    // const dateDay = Number(day.current.value);
    const dateDay = day.current.value;

    console.log(
      `dateYear- ${dateYear} ; dateMonth- ${dateMonth} ; dateDay- ${dateDay}`
    );

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

    //need to fix check, doesnt give type
    function isNumber(value) {
      return typeof value === 'number' && !isNaN(value);
    }

    //if date is NOT a number then print log
    if (isNumber(dateYear)) {
      console.log('date provided is not a number');
    }
    //if months doesnt include dateMonth print log
    if (!months.includes(dateMonth)) {
      console.log('month provided isn`t valid');
    }
    //if day is NOT a number then print log
    if (isNumber(dateDay)) {
      console.log('day provided is not valid');
    }

    const newDates = [
      ...dates,

      {
        year: dateYear,
        month: dateMonth,
        day: dateDay,
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

  return (
    <div>
      <div className="receiptCard border p-3 rounded">
        {dates.map(({ year, month, day }) => (
          <button key={`${year}${month}${day}`} className="dateButton mb-1">
            {year} - {month} - {day}
            {dayOrdinalSwitch(day)}
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
      </div>
    </div>
  );
}

export default ReceiptCard;
