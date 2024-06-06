import { useContext, useState, useEffect } from 'react';

import { calculateShopExpenses } from '../../../utils/calculateShopExpenses';

import { AppContext } from '../../../context/appContext';
import { UserIdContext } from '../../../context/userIdContext';

function ExpenseByShopCard() {
  const { data } = useContext(AppContext);
  const { userId } = useContext(UserIdContext);

  function capitalizeFirstLetter(string) {
    const lowerCaseString = string.toLowerCase();

    const returnString =
      lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);

    return returnString;
  }

  let uniqueShops = [...new Set(data.map((item) => item.shop))];

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
        //kodo dubliavimas
        isMobile
          ? 'text-center budgetCard border rounded p-3 m-3'
          : 'text-center budgetCard border rounded p-3 m-3 w-50'
      }
    >
      <h4>Expenses by shop</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Shop</th>
            <th scope="col">Money spent</th>
          </tr>
        </thead>
        <tbody>
          {uniqueShops.map((item) => (
            <tr key={item}>
              <td>{capitalizeFirstLetter(item)}</td>
              <td>
                {calculateShopExpenses(data, item.toLowerCase(), userId)} €
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseByShopCard;
