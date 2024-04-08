import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './receiptCard.scss';

//mock date data
import mockDateData from '../../mockDateData';
const mockYearData = mockDateData;

function ReceiptCard() {
  const [dates, setDates] = useState(mockYearData);

  const year = useRef(null);
  const month = useRef(null);

  function mapDateData() {
    console.log(`---DATE DATA--- ${year.current.value}`);
    const newData = [
      ...dates,
      //   { year: Number(year.current.value), month: String(month.current.value) },
      { year: year.current.value, month: month.current.value },
    ];
    setDates(newData);

    //TODO
    //need item to see if the page is loading- adding item
    //otherwise some sort of a bug that sometimes doesnt
    //imediatelly add item and reamap
    //!!!IMPORTANT!!!
    //add useState hook to change + button to loading
  }

  return (
    <div>
      <div className="receiptCard border p-3 rounded">
        {dates.map(({ year, month }) => (
          //   <tr key={`${year}${month}`}>
          <button key={`${year}${month}`} className="dateButton mb-1">
            {year}-{month}
          </button>
          //   </tr>
        ))}
      </div>
      <div className="receiptCard border p-3 rounded">
        <div className="addButton">
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
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                <FontAwesomeIcon
                  onClick={mapDateData}
                  className="buttonSvg"
                  icon={faPlus}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptCard;
