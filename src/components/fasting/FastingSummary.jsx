import React from 'react';
import  useFasting  from '../../hooks/useFasting';
import { formatDate } from '../../utils/DateFormatter';

const FastingSummary = () => {
  const { fastingData } = useFasting();

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Fasting Summary</h2>
      {fastingData ? (
        <ul>
          <li><strong>Status:</strong> {fastingData.isFasting ? 'Fasting' : 'Not Fasting'}</li>
          <li><strong>Start Time:</strong> {formatDate(fastingData.startTime)}</li>
          <li><strong>End Time:</strong> {fastingData.endTime ? formatDate(fastingData.endTime) : 'Ongoing'}</li>
        </ul>
      ) : (
        <p>No fasting data available.</p>
      )}
    </div>
  );
};

export default FastingSummary;
