import { createContext, useState } from "react";
  
export const UserNameContex = createContext(null);

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") ?? ""
  );

  const saveUserName = (newUserName) => {
    setUserName(newUserName);
    localStorage.setItem("userName", newUserName);
  };

  const removeUserName = () => {
    setUserName("");
    localStorage.removeItem("userName")
  };

  const value = { userName, saveUserName, removeUserName };

  return (
    <UserNameContex.Provider value={value}>
      {children}
    </UserNameContex.Provider>
  );
};