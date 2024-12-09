import instance from './index';

export const getRestaurants = async () => {
  const response = await instance.get('/resturant');
  return response.data;
};

export const getCategories = async () => {
  const response = await instance.get('/category');
  return response.data;
};

export const getRestaurantsById = async (id) => {
  const response = await instance.get(`/resturant/${id}`);
  return response.data;
};
