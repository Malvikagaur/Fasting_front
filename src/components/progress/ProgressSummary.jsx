import React, { useEffect } from "react";
import  useProgress  from "../../hooks/useProgress";

const ProgressSummary = () => {
  const { summary, fetchProgressSummary } = useProgress();

  useEffect(() => {
    fetchProgressSummary();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Progress Summary</h2>
      <div className="space-y-2">
        {summary.map((item, index) => (
          <div key={index} className="border p-3 rounded-md">
            <div className="font-medium">{item.metric}</div>
            <div className="text-gray-600">Value: {item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSummary;
