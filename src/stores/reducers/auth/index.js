import { AUTH } from '../../types';

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case AUTH.DO_LOGIN.LOADING:
      return {
        ...initialState,
        loading: true
      };
    case AUTH.DO_LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case AUTH.DO_LOGIN.FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case AUTH.DO_REFRESH_TOKEN:
      return {
        ...state,
        data: {
          ...state.data,
          token: payload
        }
      };
    case AUTH.DO_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
