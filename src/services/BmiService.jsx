import api from './api';

export const calculateBMI = async (bmiData) => {
  const res = await api.post('/bmi/calculate', bmiData);
  return res.data;
};

export const getBmiHistory = async () => {
  const res = await api.get('/bmi/history');
  return res.data;
};

export const getBmiChart = async () => {
  const res = await api.get('/bmi/chart');
  return res.data;
};
