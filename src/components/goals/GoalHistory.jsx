import React, { useEffect } from "react";
import  useGoals  from "../../hooks/useGoals";

const GoalHistory = () => {
  const { goalHistory, fetchGoalHistory } = useGoals();

  useEffect(() => {
    fetchGoalHistory();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Goal History</h2>
      <ul className="space-y-2">
        {goalHistory.map((goal, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="font-bold">{goal.type}</div>
            <div>Target: {goal.target}</div>
            <div>Status: {goal.completed ? "Completed" : "Incomplete"}</div>
            <div>Date: {new Date(goal.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalHistory;
