import React, { createContext, useState, useEffect, useContext } from 'react';

import { cfg } from '../cfg/cfg';
import { UserIdContext } from './userIdContext';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [loadingExpenses, setLoadingExpenses] = useState(false);
  const { userId } = useContext(UserIdContext);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('expensesData')) || []
  );

  //fetch expense data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        //set loading overlay
        setLoadingExpenses(true);
        console.log('NODE_ENV', process.env.NODE_ENV);
        console.log('host', cfg.API.HOST);

        //get /expenses
        const response = await fetch(`${cfg.API.HOST}/expenses`);
        console.log('response-', response);

        //set expenses to fetched data, convert it to json
        const expenses = await response.json();

        setData(
          expenses.filter((item) => {
            return item.userId === userId;
          })
        );
      } catch (error) {
        console.log('error', error.message);
      } finally {
        setLoadingExpenses(false);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <AppContext.Provider value={{ data, setData, loadingExpenses }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
