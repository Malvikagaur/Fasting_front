import api from './api';

export const logMeal = async (mealData) => {
  const res = await api.post('/meals/log', mealData);
  return res.data;
};

export const getMealPlan = async () => {
  const res = await api.get('/meals/plan');
  return res.data;
};

export const getMealHistory = async () => {
  const res = await api.get('/meals/history');
  return res.data;
};
