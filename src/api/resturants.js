import instance from './index';

export const getRestaurants = async () => {
  const response = await instance.get('/resturant');
  return response.data;
};

export const getCategories = async () => {
  const response = await instance.get('/category');
  return response.data;
};
