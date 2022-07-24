import axios from 'axios';
import { toast } from 'react-toastify';
export const createClient = (options) => {
  const client = axios.create({
    baseURL: options?.baseUrl ?? process.env.REACT_APP_BASE_URL,
    timeout: options?.timeout ?? 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const setAuthorizationHeader = (token) => {
    client.defaults.headers.Authorization = `Bearer ${token}`;
  };

 
  const getAuthorizationToken = () => client.defaults.headers.Authorization?.replace('Bearer ', '');

  const removeAuthorizationHeader = () => {
    delete client.defaults.headers.Authorization;
  };

  // Add a response interceptor
  client.interceptors.response.use(
    (response) =>
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      response,
    async (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      let message = error?.response?.data?.data || error?.response?.data?.error || error?.message || 'Unknown error';

      if (typeof message !== 'string') {
        try {
          message = JSON.stringify(message);
        } catch {
          message = 'Unknown error';
        }
      }

      // await store.dispatch(logout());

      // notifications.notifyError(message, {
      //   persist: [408, 500, 501, 502, 503, 504].includes(
      //     error.response?.status as number
      //   ),
      // });

      return Promise.reject(error);
    }
  );

  return {
    client,
    setAuthorizationHeader,
    removeAuthorizationHeader,
    getAuthorizationToken,
  };
};

export const {
  client: dotGridRequest,
  setAuthorizationHeader,
  removeAuthorizationHeader,
  getAuthorizationToken,
} = createClient();

export default dotGridRequest;
