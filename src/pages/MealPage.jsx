import React from 'react';
import MealLogger from '../components/meal/MealLogger';
import MealPlan from '../components/meal/MealPlan';
import MealHistory from '../components/meal/MealHistory';

const MealPage = () => {
  return (
    <div className="p-6 space-y-6">
      <MealLogger />
      <MealPlan />
      <MealHistory />
    </div>
  );
};

export default MealPage;
