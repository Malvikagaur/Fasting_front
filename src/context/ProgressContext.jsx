import { createContext, useState, useEffect } from "react";
import { getProgressChart } from "../services/ProgressService";

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      const data = await getProgressChart(); 
      setProgressData(data);
    };
    fetchProgress();
  }, []);

  return (
    <ProgressContext.Provider value={{ progressData, setProgressData }}>
      {children}
    </ProgressContext.Provider>
  );
};
