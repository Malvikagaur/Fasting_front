import api from './api';

export const startFasting = async (data) => {
  const res = await api.post('/fasting/start', data);
  return res.data;
};

export const stopFasting = async () => {
  const res = await api.post('/fasting/stop');
  return res.data;
};

export const getFastingHistory = async () => {
  const res = await api.get('/fasting/history');
  return res.data;
};

export const getFastingSummary = async () => {
  const res = await api.get('/fasting/summary');
  return res.data;
};
