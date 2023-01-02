import { GENERAL } from '../../types';

const initialState = {
  language: {
    code: 'en',
    short: 'ENG',
    long: 'English'
  }
};

export const generalReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GENERAL.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload
      };
    default:
      return state;
  }
};
