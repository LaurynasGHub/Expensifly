import React, { useContext } from 'react';

import './expenseCard.scss';

function ExpenseCard({ shopName, month, data }) {
  let calcPrice = 0;
  let priceArray = [];

  data.map(({ productPrice }) => priceArray.push(productPrice));

  for (let i = 0; i < priceArray.length; i++) {
    calcPrice += priceArray[i];
  }

  return (
    <div className="expenseCard border p-3 rounded">
      <div className="expenseCardContents">
        <table class="table">
          <caption>
            Expenses at {shopName} on {month}
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
            {data.map(({ productName, productPrice }) => (
              <tr>
                <td> {productName}</td>
                <td> {productPrice}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseCard;
