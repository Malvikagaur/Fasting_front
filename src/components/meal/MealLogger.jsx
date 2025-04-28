import React, { useState } from "react";
import { logMeal } from "../../services/MealService";
import  useMeal  from "../../hooks/useMeal";

const MealLogger = () => {
  const { fetchMealHistory } = useMeal();
  const [meal, setMeal] = useState({ name: "", calories: "", time: "" });

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logMeal(meal);
    setMeal({ name: "", calories: "", time: "" });
    fetchMealHistory();
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Log Your Meal</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={meal.name}
          onChange={handleChange}
          placeholder="Meal Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="calories"
          value={meal.calories}
          onChange={handleChange}
          placeholder="Calories"
          type="number"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="time"
          value={meal.time}
          onChange={handleChange}
          placeholder="Time"
          type="datetime-local"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Log Meal
        </button>
      </form>
    </div>
  );
};

export default MealLogger;
