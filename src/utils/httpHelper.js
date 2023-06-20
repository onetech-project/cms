import axios from 'axios';
import { store } from '../stores/index';
import api from '../apis';
import { authAction } from '../stores/actions';

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token) => {
  refreshSubscribers.forEach((cb) => cb(token));
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_URL
});

const get = (url, config = {}) => instance.get(url, config);
const post = (url, data, config = {}) => instance.post(url, data, config);
const put = (url, data, config = {}) => instance.put(url, data, config);
const remove = (url, config = {}) => instance.delete(url, config);

instance.interceptors.request.use(
  async (config) => {
    try {
      if (window.navigator.onLine) {
        const state = store.getState();
        if (!config.isRetry && state.authReducer.data && !config.noToken) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${state.authReducer.data?.token}`;
          // eslint-disable-next-line no-param-reassign
          config.timeout = 20000;
          // eslint-disable-next-line no-param-reassign
          config.timeoutErrorMessage = 'Request Timeout';
        }
        return config;
      }
      return Promise.reject(new Error('No Internet Connection'));
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const state = store.getState();
    const originalRequest = error.config;
    const contentType = error.response?.headers?.['content-type'];
    const unauthorized = error.response?.data;
    const isUnauthorized =
      contentType?.includes?.('text/plain') || unauthorized?.includes?.('Unauthorized');
    if (originalRequest.isExternalApi) {
      return Promise.reject(error);
    }
    if (error.response?.status === 401 && isUnauthorized) {
      if (!isRefreshing) {
        refreshSubscribers = [];
        isRefreshing = true;
        instance
          .post(
            api.constant.refreshUrl,
            {
              refreshToken: state.authReducer.auth.refresh_token,
              userId: state.authReducer.auth.user?._id
            },
            { isRetry: true, noAlert: originalRequest?.noAlert }
          )
          .then((newToken) => {
            isRefreshing = false;
            const token = newToken.data.data.access_token;
            store.dispatch(authAction.doRefreshToken(token));
            onRefreshed(token);
          })
          .catch(() => {
            alert('Your Session Has Expired. Please re-login!');
            store.dispatch(authAction.doLogout());
            Promise.reject(error);
          });
      }
      const retryOrigReq = new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          // replace the expired token and retry
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      });
      return retryOrigReq;
    }
    // if (!originalRequest?.noAlert) Alert.alert('Error', errorParser(error), [{ text: 'OK' }]);
    return Promise.reject(error);
  }
);

export default { get, post, put, remove };
