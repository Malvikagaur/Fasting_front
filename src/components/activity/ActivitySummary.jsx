import React from "react";
import  useActivity  from "../../hooks/useActivity";

const ActivitySummary = () => {
  const { activitySummary } = useActivity();

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Weekly Summary</h2>
      <ul className="space-y-2">
        {activitySummary.map((summary, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="font-bold">{summary.name}</div>
            <div>Total Duration: {summary.totalDuration} min</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitySummary;
