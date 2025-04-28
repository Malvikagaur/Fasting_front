import React from 'react';
import SetGoals from '../components/goals/SetGoals';
import GoalProgress from '../components/goals/GoalProgress';
import GoalHistory from '../components/goals/GoalHistory';

const GoalsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <SetGoals />
      <GoalProgress />
      <GoalHistory />
    </div>
  );
};

export default GoalsPage;
