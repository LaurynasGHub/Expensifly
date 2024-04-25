import React, { useState, useReducer, useRef, useContext } from 'react';

import { cfg } from '../../cfg/cfg';

import './expenseCard.scss';

//utils
import { dayOrdinal } from '../../utils/dayOrdinalUtil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/appContext';

function ExpenseCard() {
  const { data } = useContext(AppContext);

  const [expenseData, setExpenseData] = useState(data);

  const expenseName = useRef();
  const expensePrice = useRef();
  const expenseShop = useRef();
  const expenseDay = useRef();
  const expenseMonth = useRef();
  const expenseYear = useRef();

  function calcPrice() {
    let calcPrice = 0;
    let priceArray = [];

    data.map((item) => priceArray.push(item.price));

    for (let i = 0; i < priceArray.length; i++) {
      calcPrice += priceArray[i];
    }

    return calcPrice.toFixed(2);
  }

  //function to add expense to the database
  async function addExpense() {
    console.log('Add expense');

    //set data
    const newExpense = {
      title: expenseName.current,
      price: expensePrice.current,
      year: expenseYear.current,
      month: expenseMonth.current,
      day: expenseDay.current,
      shop: expenseShop.current,
    };

    //post new data to backend
    const response = await fetch(`${cfg.API.HOST}/expenses`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',

        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newExpense),
    });

    console.log(response);

    //update data
    setExpenseData({ ...expenseData, newExpense });
  }

  return (
    <div className="expenseCard p-3 border rounded ">
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
          {data.map((item) => (
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
              Total price of the items: {calcPrice()}€
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseCard;
