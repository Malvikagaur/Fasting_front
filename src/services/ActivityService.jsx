import api from './api';

export const trackActivity = async (activityData) => {
  const res = await api.post('/activities/track', activityData);
  return res.data;
};

export const getActivitySummary = async () => {
  const res = await api.get('/activities/summary');
  return res.data;
};

export const getActivityHistory = async () => {
  const res = await api.get('/activities/history');
  return res.data;
};
