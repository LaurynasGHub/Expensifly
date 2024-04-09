import React, { useState, useReducer, useRef } from 'react';

import './expenseCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//components
// import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';

function ExpenseCard({ shopName, month, data }) {
  function calcPrice() {
    let calcPrice = 0;
    let priceArray = [];

    data.map(({ productPrice }) => priceArray.push(productPrice));

    for (let i = 0; i < priceArray.length; i++) {
      calcPrice += priceArray[i];
    }

    return calcPrice;
  }

  const [expenses, setExpenses] = useState(data);

  const expensePrice = useRef(null);
  const expenseName = useRef(null);

  function addExpense() {
    console.log('------addExpense------');

    console.log('Expense name-', expenseName.current.value);
    console.log('Expense price-', expensePrice.current.value);

    const newExpenses = [
      ...expenses,
      {
        productName: String(expenseName.current.value),
        productPrice: Number(expensePrice.current.value),
      },
    ];

    // setExpenses({ ...expenses, item });
    setExpenses(newExpenses);
    // handleClick();
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
                ref={expenseName}
                placeholder="Expense name"
                aria-label="Expense name"
                aria-describedby="basic-addon2"
              />
              <input
                type="text"
                className="form-control"
                id="expensePrice"
                ref={expensePrice}
                placeholder="Price"
                aria-label="Price"
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
            <th scope="col" className="noBottomBorder">
              Shop: {shopName}
            </th>
            <th scope="col" className="noBottomBorder">
              Total: {calcPrice()}€
            </th>
          </tr>
          <tr>
            <th scope="col">Expense</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ productName, productPrice }) => (
            <tr key={productName}>
              <td> {productName}</td>
              <td> {productPrice}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseCard;
