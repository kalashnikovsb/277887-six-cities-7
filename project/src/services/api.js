import axios from 'axios';
import {setApiTokenHeader} from '../utils.js';


const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;


const HttpCodes = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';


export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  setApiTokenHeader(api, token);

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
