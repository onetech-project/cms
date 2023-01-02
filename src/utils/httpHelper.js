import axios from 'axios';
const instance = axios.create();

const get = (url, config = {}) => instance.get(url, config);
const post = (url, data, config = {}) => instance.post(url, data, config);
const put = (url, data, config = {}) => instance.put(url, data, config);
const remove = (url, config = {}) => instance.delete(url, config);

export default { get, post, put, remove };
