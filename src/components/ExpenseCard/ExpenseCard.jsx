import React, { useState, useReducer, useRef } from 'react';

import './expenseCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ExpenseCard({ shopName, month, data, setData }) {
  function calcPrice() {
    let calcPrice = 0;
    let priceArray = [];

    data.map(({ productPrice }) => priceArray.push(productPrice));

    for (let i = 0; i < priceArray.length; i++) {
      calcPrice += priceArray[i];
    }

    return calcPrice;
  }

  return (
    <div className="expenseCard p-3 border rounded ">
      <table className="table">
        <caption className="mt-2">
          Add new expense
          <div className="addButton">
            <div className="input-group my-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="expenseName"
                // ref={expenseName}
                placeholder="Expense name"
                aria-label="Expense name"
                aria-describedby="basic-addon2"
              />
              <input
                type="number"
                className="form-control"
                id="expensePrice"
                // ref={expensePrice}
                placeholder="Price"
                aria-label="Price"
                aria-describedby="basic-addon2"
              />
              <input
                type="text"
                className="form-control"
                id="expenseShop"
                // ref={expenseName}
                placeholder="Shop"
                aria-label="Shop"
                aria-describedby="basic-addon2"
              />
              <input
                type="number"
                className="form-control"
                id="expenseDay"
                // ref={expensePrice}
                placeholder="Day"
                aria-label="Day"
                aria-describedby="basic-addon2"
              />
              <select id="month" name="expenseMonth" className="form-control">
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
                // ref={expensePrice}
                placeholder="Year"
                aria-label="Year"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  // onClick={addExpense}
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
          {data.map(({ productName, productPrice }) => (
            <tr key={`${productName}${productPrice}`}>
              <td> {productName}</td>
              <td> {productPrice}€</td>
            </tr>
          ))}
        </tbody>
      </table>
      <tr>
        <th scope="col" className="noBottomBorder">
          Total price of the items: {calcPrice()}€
        </th>
      </tr>
    </div>
  );
}

export default ExpenseCard;
