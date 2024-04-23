import React, { createContext, useState } from 'react';

import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [loadingExpenses, setLoadingExpenses] = useState(false);

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
      const expenses = await response.json;

      console.log('data', expenses);
    } catch (error) {
      console.log('error', error.message);
    } finally {
      setLoadingExpenses(false);
    }
  };

  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
}
