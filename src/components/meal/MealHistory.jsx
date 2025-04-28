import React, { useEffect } from "react";
import  useMeal  from "../../hooks/useMeal";

const MealHistory = () => {
  const { mealHistory, fetchMealHistory } = useMeal();

  useEffect(() => {
    fetchMealHistory();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Meal History</h2>
      <ul className="space-y-2">
        {mealHistory.map((meal, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="font-bold">{meal.name}</div>
            <div>Calories: {meal.calories}</div>
            <div>Logged at: {new Date(meal.time).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealHistory;
