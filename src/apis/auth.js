import { httpHelper } from '../utils';

const login = (email, password) => httpHelper.post('/api/v1/login', { email, password });

export default { login };
