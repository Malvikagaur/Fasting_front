import React from 'react';
import FastingTimer from '../components/fasting/FastingTimer';
import FastingSummary from '../components/fasting/FastingSummary';
import FastingHistory from '../components/fasting/FastingHistory';

const FastingPage = () => {
  return (
    <div className="p-6 space-y-6">
      <FastingTimer />
      <FastingSummary />
      <FastingHistory />
    </div>
  );
};

export default FastingPage;
