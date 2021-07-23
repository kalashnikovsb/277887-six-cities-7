import axios from 'axios';


const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;


const HttpCodes = {
  UNAUTHORIZED: 401,
};


export const createAPI = (onUnauthorized) => {
  const token = localStorage.getItem('token') ?? '';

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  axios.get(...api, {headers: {token}});

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    if (response.status === HttpCodes.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
