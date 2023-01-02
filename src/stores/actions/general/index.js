import { GENERAL } from '../../types';

const changeLanguage = (language) => ({
  type: GENERAL.CHANGE_LANGUAGE,
  payload: language
});

export default { changeLanguage };
