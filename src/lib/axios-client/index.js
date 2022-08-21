import axios, { CancelToken as axiosCancelToken } from 'axios';
import { catchAxiosError } from './axios-error-handler';
import appConfig from '@constants/app-config';

const { BASE_API_URL } = appConfig;

const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

const getData = (response) => response.data;axiosCancelToken

axiosClient.interceptors.response.use(getData, catchAxiosError);

axiosClient.interceptors.request.use((config) => {
  return config;
});

export const CancelToken = axiosCancelToken;
export default axiosClient;
