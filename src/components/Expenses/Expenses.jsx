import React from 'react';

import './expenses.scss';

//components
import ReceiptCard from '../ReceiptCard/ReceiptCard';

function Expenses() {
  return (
    <div className="receiptsPage">
      <div className="receiptsText mb-0 p-3">
        <h2>Expenses</h2>
        <p className="mb-0">
          Welcome to expenses page. Here you can find all your receipts that are
          automatically gathered from Your specified Gmail account, as well as
          other expenses that You add.
        </p>
      </div>

      <ReceiptCard yearData={[]} />
    </div>
  );
}

export default Expenses;
