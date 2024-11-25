import React, { useState } from 'react'
import UserContext from './UserContext'

const ContextProvider = ({ children }) => {
  let [name, setName] = useState();
  let [theme, setTheme]=useState('light');
  return (
    <UserContext.Provider value={{ name, setName, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider