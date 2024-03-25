import React, { useContext, useState } from 'react';

import './expenseCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//components
// import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';

function ExpenseCard({ shopName, month, data }) {
  let calcPrice = 0;
  let priceArray = [];

  data.map(({ productPrice }) => priceArray.push(productPrice));

  for (let i = 0; i < priceArray.length; i++) {
    calcPrice += priceArray[i];
  }

  //adds expense element to expenses
  const [expenses, setExpenses] = useState(data);

  const addExpense = () => {
    //get input items
    let expenseName = document.getElementById('expenseName').value;
    let expensePrice = document.getElementById('expensePrice').value;

    // let inputExpense = JSON.stringify(expenses);

    //TODO fix
    //cant parse string to JSON
    let item = `{ productName: ${expenseName}, productPrice: ${expensePrice} }`;

    console.log('item-', item);
    console.log('item stringify-', JSON.stringify(item));

    let stringifyValue = JSON.stringify(item);
    let exportValue = { ...expenses, item };

    // expenses['productName'] = expenseName;
    // expenses['productPrice'] = expensePrice;

    // let exportValue = JSON.stringify(expenses + item);

    console.log(exportValue);

    // setExpenses(exportValue);
  };

  return (
    <div className="expenseCard p-3 border rounded ">
      <div className="expenseCardContents">
        <table className="table">
          <caption>
            Expenses at {shopName} on {month}
            <div className="addButton">
              <div className="input-group my-3 mb-3">
                <input
                  type="text"
                  id="expenseName"
                  className="form-control"
                  placeholder="Expense name"
                  aria-label="Expense name"
                  aria-describedby="basic-addon2"
                />
                <input
                  type="text"
                  className="form-control"
                  id="expensePrice"
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
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
                Total: {calcPrice}€
              </th>
            </tr>
            <tr>
              <th scope="col">Expense</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(({ productName, productPrice }) => (
              <tr>
                <td> {productName}</td>
                <td> {productPrice}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <AddButton /> */}
    </div>
  );
}

export default ExpenseCard;
