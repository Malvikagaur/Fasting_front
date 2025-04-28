import api from './api';

export const getProgressChart = async () => {
  const res = await api.get('/progress/chart');
  return res.data;
};

export const getProgressSummary = async () => {
  const res = await api.get('/progress/summary');
  return res.data;
};
