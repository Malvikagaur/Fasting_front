import React from 'react';
import ProgressChart from '../components/progress/ProgressChart';
import ProgressSummary from '../components/progress/ProgressSummary';

const ProgressPage = () => {
  return (
    <div className="p-6 space-y-6">
      <ProgressChart />
      <ProgressSummary />
    </div>
  );
};

export default ProgressPage;
