import api from './api';

export const getUserProfile = async () => {
  const res = await api.get('/user/profile');
  return res.data;
};

export const updateUserProfile = async (profileData) => {
  const res = await api.put('/user/update', profileData);
  return res.data;
};
