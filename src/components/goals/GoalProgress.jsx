import React from "react";
import  useGoals  from "../../hooks/useGoals";

const GoalProgress = () => {
  const { goals } = useGoals();

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Current Goals</h2>
      <ul className="space-y-2">
        {goals.map((goal, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="font-bold">{goal.type}</div>
            <div>Target: {goal.target}</div>
            <div>Status: {goal.completed ? "Completed" : "In Progress"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalProgress;
