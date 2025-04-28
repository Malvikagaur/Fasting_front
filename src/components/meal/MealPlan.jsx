import React from "react";
import  useMeal  from "../../hooks/useMeal";

const MealPlan = () => {
  const { mealPlan } = useMeal();

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Your Meal Plan</h2>
      <ul className="space-y-2">
        {mealPlan.map((meal, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="font-bold">{meal.name}</div>
            <div>Calories: {meal.calories}</div>
            <div>Time: {meal.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlan;
