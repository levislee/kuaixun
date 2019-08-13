import { domain } from './api_config.js';
axios.defaults.baseURL = domain;
// axios.defaults.withCredentials = true;

export default axios;