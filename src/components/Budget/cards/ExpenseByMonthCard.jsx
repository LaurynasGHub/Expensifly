import { useContext, useEffect, useState } from 'react';

import { calculateMonthExpenses } from '../../../utils/calculateMonthExpenses';

import { AppContext } from '../../../context/appContext';
import { UserIdContext } from '../../../context/userIdContext';

function ExpenseByMonthCard() {
  const { data } = useContext(AppContext);
  const { userId } = useContext(UserIdContext);

  let uniqueMonths = [...new Set(data.map((item) => item.month))];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //if window size is below 600px gives true
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={
        isMobile
          ? 'text-center budgetCard border rounded p-3 m-3'
          : 'text-center budgetCard border rounded p-3 m-3 w-50'
      }
    >
      <h4>Expenses by month</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Money spent</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO */}
          {/* add year filter, so that data can be filtered by year+month */}
          {uniqueMonths.map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td>
                {calculateMonthExpenses(data, item.toLowerCase(), userId)} €
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseByMonthCard;
