import React, { useState } from "react";
import  useBMI  from "../../hooks/useBMI";

const BmiCalculator = () => {
  const { calculateBMI } = useBMI();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiResult = calculateBMI(height, weight);
      setResult(bmiResult);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Height (cm)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Weight (kg)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
          Calculate
        </button>
      </form>
      {result && (
        <div className="mt-4">
          <p className="font-semibold">Your BMI: {result.bmi}</p>
          <p className="text-gray-600">Category: {result.category}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
