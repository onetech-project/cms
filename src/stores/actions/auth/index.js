import api from '../../../apis';
import { errorParser } from '../../../utils';
import { AUTH } from '../../types';

const { DO_LOGIN, DO_LOGOUT, DO_REFRESH_TOKEN } = AUTH;

export const doLoginRequest = () => ({
  type: DO_LOGIN.REQUEST
});

export const doLoginSuccess = (auth) => ({
  type: DO_LOGIN.SUCCESS,
  payload: auth
});

export const doLoginFail = (error) => ({
  type: DO_LOGIN.FAILED,
  payload: error
});

export const doLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(doLoginRequest());
      const { data } = await api.auth.login(email, password);
      dispatch(doLoginSuccess(data.data));
    } catch (error) {
      const message = errorParser(error);
      dispatch(doLoginFail(message));
    }
  };

export const doLogout = () => (dispatch) => {
  dispatch({ type: DO_LOGOUT });
};

export const doRefreshToken = (token) => (dispatch) => {
  dispatch({ type: DO_REFRESH_TOKEN, payload: token });
};
