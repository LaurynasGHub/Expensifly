import React, { createContext, useState, useEffect, useContext } from 'react';

import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [loadingExpenses, setLoadingExpenses] = useState(false);
  const [data, setData] = useState(
    //TODO
    //finish setting up local storage/cache
    JSON.parse(localStorage.getItem('expensesData')) || []
  );

  //fetch expense data from the server
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

      setData(expenses);
    } catch (error) {
      console.log('error', error.message);
    } finally {
      setLoadingExpenses(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, setData, loadingExpenses }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
