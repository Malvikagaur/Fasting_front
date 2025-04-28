import React, { useEffect } from 'react';
import  useFasting  from '../../hooks/useFasting';
import { formatDate } from '../../utils/DateFormatter';

const FastingHistory = () => {
  const { fastingHistory, fetchFastingHistory } = useFasting();

  useEffect(() => {
    fetchFastingHistory();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Fasting History</h2>
      {fastingHistory.length ? (
        <ul className="space-y-2">
          {fastingHistory.map((session, index) => (
            <li key={index} className="border-b pb-2">
              <div><strong>Start:</strong> {formatDate(session.startTime)}</div>
              <div><strong>End:</strong> {formatDate(session.endTime)}</div>
              <div><strong>Duration:</strong> {session.duration} mins</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No fasting sessions recorded.</p>
      )}
    </div>
  );
};

export default FastingHistory;
