"use client"
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ParsonContext = createContext();

const ParsonProvider = ({ children }) => {

  const [stored, setStored] = useState([]);

  const handelButton = (item) => {
    const isExist = stored.find(child => child.name === item.name && child.type === item.type);

    if (isExist) {
      toast.error('Already calling');
    } else {
      setStored([...stored, item]);
      toast.success(`${item.type} ${item.name} is calling`);
    }
  };

  const data = {
    stored,
    handelButton,
    setStored
  };

  return (
    <ParsonContext.Provider value={data}>
      {children}
    </ParsonContext.Provider>
  );
};

export default ParsonProvider;