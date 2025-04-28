import api from './api';

export const setGoals = async (goals) => {
  const res = await api.post('/goals/set', goals);
  return res.data;
};

export const getGoalProgress = async () => {
  const res = await api.get('/goals/progress');
  return res.data;
};

export const getGoalHistory = async () => {
  const res = await api.get('/goals/history');
  return res.data;
};
