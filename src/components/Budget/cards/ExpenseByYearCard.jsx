import { useContext, useState, useEffect } from 'react';

import { calculateYearExpenses } from '../../../utils/calculateYearExpenses';

import { AppContext } from '../../../context/appContext';
import { UserIdContext } from '../../../context/userIdContext';

function ExpenseByYearCard() {
  const { data } = useContext(AppContext);
  const { userId } = useContext(UserIdContext);

  let uniqueYears = [
    ...new Set(data.map((item) => item.year).sort((a, b) => a - b)),
  ];

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
      <h4>Expenses by year</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Money spent</th>
          </tr>
        </thead>
        <tbody>
          {uniqueYears.map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td>{calculateYearExpenses(data, item, userId)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseByYearCard;
