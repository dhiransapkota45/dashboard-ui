import { createContext, useState } from "react";
import { IoMdReturnRight } from "react-icons/io";

export const ToggleContext = createContext();

const ContextFunc = (props) => {
  const func = () => {
    if (localStorage.getItem("darkmode") == "true") {
      return true;
    } else {
      return false;
    }
  };

  const [toggle, setToggle] = useState(() => func());
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {props.children}
    </ToggleContext.Provider>
  );
};

export default ContextFunc;
