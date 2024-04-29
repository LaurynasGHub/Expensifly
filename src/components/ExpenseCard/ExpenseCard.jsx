import React, { useState, useReducer, useRef, useContext } from 'react';

import { cfg } from '../../cfg/cfg';

import './expenseCard.scss';

//utils
import { dayOrdinal } from '../../utils/dayOrdinalUtil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/appContext';

function ExpenseCard() {
  const { data, setData } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState('');

  const expenseName = useRef();
  const expensePrice = useRef();
  const expenseShop = useRef();
  const expenseDay = useRef();
  const expenseMonth = useRef();
  const expenseYear = useRef();

  function calcPrice() {
    let calcPrice = 0;
    let priceArray = [];

    data
      .filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      })

      .map((item) => priceArray.push(parseFloat(item.price)));

    for (let i = 0; i < priceArray.length; i++) {
      calcPrice += priceArray[i];
    }

    return calcPrice.toFixed(2);
  }

  //function to add expense to the database
  async function addExpense() {
    try {
      console.log('Add expense');

      const title = expenseName.current.value;
      const price = expensePrice.current.value;
      const year = expenseYear.current.value;
      const month = expenseMonth.current.value;
      const day = expenseDay.current.value;
      const shop = expenseShop.current.value;

      //set data
      const newExpense = {
        title,
        price,
        year,
        month,
        day,
        shop,
      };

      //post new data to backend
      const response = await fetch(`${cfg.API.HOST}/expenses`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },

        body: JSON.stringify(newExpense),
      });
      console.log('response-', response);

      //update data in the database
      setData([...data, newExpense]);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  return (
    <div className="expenseCard p-3 border rounded ">
      <div className="searchBar">
        <div className="input-group py-3">
          {/* <p>Enter search parameters</p> */}
          <input
            type="text"
            id="year"
            className="form-control"
            placeholder="Title"
            aria-label="Title"
            aria-describedby="basic-addon2"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase());
            }}
          />

          <select
            id="month"
            name="month"
            className="form-control"
            placeholder="Month"
          >
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
            placeholder="Day"
            aria-label="Day"
            aria-describedby="basic-addon3"
          />
          <input
            type="text"
            className="form-control"
            id="shop"
            placeholder="Shop"
            aria-label="Shop"
            aria-describedby="basic-addon2"
          />

          {/* <div className="input-group-append"> */}
          <button className="btn btn-outline-secondary" type="button">
            <FontAwesomeIcon className="buttonSvg" icon={faMagnifyingGlass} />
          </button>
          {/* </div> */}
        </div>
      </div>
      <table className="table">
        <caption className="ms-2 mt-2">
          Add new expense
          <div className="addButton">
            <div className="input-group my-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="expenseName"
                ref={expenseName}
                placeholder="Expense name"
                aria-label="Expense name"
                aria-describedby="basic-addon2"
              />
              <input
                type="number"
                className="form-control"
                id="expensePrice"
                ref={expensePrice}
                placeholder="Price"
                aria-label="Price"
                aria-describedby="basic-addon2"
              />
              <input
                type="text"
                className="form-control"
                id="expenseShop"
                ref={expenseShop}
                placeholder="Shop"
                aria-label="Shop"
                aria-describedby="basic-addon2"
              />
              <input
                type="number"
                className="form-control"
                id="expenseDay"
                ref={expenseDay}
                placeholder="Day"
                aria-label="Day"
                aria-describedby="basic-addon2"
              />
              <select
                id="month"
                name="expenseMonth"
                className="form-control"
                ref={expenseMonth}
              >
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
                id="expenseYear"
                ref={expenseYear}
                placeholder="Year"
                aria-label="Year"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={addExpense}
                >
                  <FontAwesomeIcon className="buttonSvg" icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </caption>
        <thead>
          <tr>
            <th scope="col">Expense</th>
            <th scope="col">Cost</th>
            <th scope="col">Shop</th>
            <th scope="col">Day</th>
            <th scope="col">Month</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return item.title
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            .map((item) => (
              <tr key={`${item.title}${item.price}`}>
                <td> {item.title}</td>
                <td> {item.price}€</td>
                <td> {item.shop}</td>
                <td> {`${item.day}${dayOrdinal(item.day)}`}</td>
                <td> {item.month}</td>
                <td> {item.year}</td>
              </tr>
            ))}
        </tbody>
        <tbody>
          <tr>
            <th scope="col" className="noBottomBorder pt-3">
              Total price of the items: {calcPrice(searchValue)}€
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseCard;
