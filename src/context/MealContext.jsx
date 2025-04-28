import { createContext, useState, useEffect } from "react";
import { getMealHistory } from "../services/MealService";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [mealHistory, setMealHistory] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await getMealHistory();
      setMealHistory(data);
    };
    fetchMeals();
  }, []);

  return (
    <MealContext.Provider value={{ mealHistory, setMealHistory }}>
      {children}
    </MealContext.Provider>
  );
};
