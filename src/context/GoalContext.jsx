import { createContext, useState, useEffect } from "react";
import { getGoalProgress } from "../services/GoalService";

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const fetchGoalProgress = async () => {
    try {
      const data = await getGoalProgress(); // using existing service
      setGoals(data);
    } catch (error) {
      console.error("Failed to fetch goals:", error);
    }
  };

  useEffect(() => {
    fetchGoalProgress();
  }, []);

  return (
    <GoalContext.Provider value={{ goals, setGoals, fetchGoalProgress }}>
      {children}
    </GoalContext.Provider>
  );
};
