import React, { useState, useEffect } from 'react';
import  useFasting  from '../../hooks/useFasting';
import { formatTime } from '../../utils/DateFormatter';

const FastingTimer = () => {
  const { startFasting, endFasting, fastingData } = useFasting();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (fastingData?.isFasting) {
      interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - new Date(fastingData.startTime)) / 1000);
        setTimer(elapsed);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [fastingData]);

  return (
    <div className="p-4 bg-white shadow rounded-lg text-center">
      <h2 className="text-xl font-bold mb-2">Fasting Timer</h2>
      <p className="text-2xl mb-4">{formatTime(timer)}</p>
      {fastingData?.isFasting ? (
        <button onClick={endFasting} className="bg-red-500 text-white px-4 py-2 rounded">
          End Fasting
        </button>
      ) : (
        <button onClick={startFasting} className="bg-green-500 text-white px-4 py-2 rounded">
          Start Fasting
        </button>
      )}
    </div>
  );
};

export default FastingTimer;
