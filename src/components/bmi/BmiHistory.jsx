import React, { useEffect } from "react";
import  useBMI  from "../../hooks/useBMI";

const BmiHistory = () => {
  const { bmiHistory, fetchBmiHistory } = useBMI();

  useEffect(() => {
    fetchBmiHistory();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">BMI History</h2>
      <ul className="space-y-2">
        {bmiHistory.map((entry, idx) => (
          <li key={idx} className="border-b pb-2">
            <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
            <p>BMI: {entry.bmi}</p>
            <p>Category: {entry.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BmiHistory;
