import { createContext, useState } from 'react';

export const LogInContext = createContext();

const LogInProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  return (
    <LogInContext.Provider value={{ logIn, setLogIn }}>
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;
