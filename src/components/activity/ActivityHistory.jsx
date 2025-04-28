import React, { useEffect } from "react";
import  useActivity  from "../../hooks/useActivity";

const ActivityHistory = () => {
  const { activityHistory, fetchActivityHistory } = useActivity();

  useEffect(() => {
    fetchActivityHistory();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Activity History</h2>
      <ul className="space-y-2">
        {activityHistory.map((activity, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="font-bold">{activity.name}</div>
            <div>Duration: {activity.duration} min</div>
            <div>Date: {new Date(activity.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityHistory;
