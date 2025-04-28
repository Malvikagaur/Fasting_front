import { createContext, useState, useEffect } from "react";
import { getBmiHistory } from "../services/BmiService";

export const BmiContext = createContext();

export const BmiProvider = ({ children }) => {
  const [bmiHistory, setBmiHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBmiHistory();
      setBmiHistory(data);
    };
    fetchData();
  }, []);

  return (
    <BmiContext.Provider value={{ bmiHistory, setBmiHistory }}>
      {children}
    </BmiContext.Provider>
  );
};
