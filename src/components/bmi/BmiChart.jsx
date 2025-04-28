import React, { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import  useBMI  from "../../hooks/useBMI";

const BmiChart = () => {
  const { bmiChartData, fetchBmiChartData } = useBMI();

  useEffect(() => {
    fetchBmiChartData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">BMI Progress Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={bmiChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="bmi" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BmiChart;
