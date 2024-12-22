import instance from './index';
import { setToken } from './storage';

const login = async (userInfo) => {
  console.log(userInfo);
  const { data } = await instance.post('/auth/login', userInfo);
  setToken(data.token);
  return data;
};

const register = async (userInfo, image) => {
  console.log(userInfo);
  const formData = new FormData();

  for (key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  formData.append('image', {
    name: 'image.jpg',
    type: 'image/jpeg',
    uri: image,
  });

  const { data } = await instance.post('/auth/register', formData);
  setToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get('/auth/profile');
  return data;
};

export { register, login, me };
