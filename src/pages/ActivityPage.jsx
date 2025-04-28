import React from 'react';
import ActivityTracker from '../components/activity/ActivityTracker';
import ActivitySummary from '../components/activity/ActivitySummary';
import ActivityHistory from '../components/activity/ActivityHistory';

const ActivityPage = () => {
  return (
    <div className="p-6 space-y-6">
      <ActivityTracker />
      <ActivitySummary />
      <ActivityHistory />
    </div>
  );
};

export default ActivityPage;
