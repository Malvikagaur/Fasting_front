import React from 'react';
import BmiCalculator from '../components/bmi/BmiCalculator';
import BmiHistory from '../components/bmi/BmiHistory';
import BmiChart from '../components/bmi/BmiChart';

const BmiPage = () => {
  return (
    <div className="p-6 space-y-6">
      <BmiCalculator />
      <BmiChart />
      <BmiHistory />
    </div>
  );
};

export default BmiPage;
