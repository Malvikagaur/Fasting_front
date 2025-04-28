import { createContext, useState, useEffect } from "react";
import { getFastingHistory } from "../services/FastingService";

export const FastingContext = createContext();

export const FastingProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFastingHistory();
      setHistory(data);
    };
    fetchData();
  }, []);

  return (
    <FastingContext.Provider value={{ history, setHistory }}>
      {children}
    </FastingContext.Provider>
  );
};
