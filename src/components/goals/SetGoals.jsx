import React, { useState } from "react";
import { setGoals } from "../../services/GoalService"; //  Correct import
import useGoals from "../../hooks/useGoals"; 

const SetGoals = () => {
  const [goal, setGoalState] = useState({ type: "", target: "" });
  const { fetchGoalProgress } = useGoals(); 

  const handleChange = (e) => {
    setGoalState({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setGoals(goal); 
    setGoalState({ type: "", target: "" });
    fetchGoalProgress(); 
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Set New Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="type"
          placeholder="Goal Type (e.g., Steps)"
          value={goal.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="target"
          placeholder="Target Value"
          value={goal.target}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
          Save Goal
        </button>
      </form>
    </div>
  );
};

export default SetGoals;

