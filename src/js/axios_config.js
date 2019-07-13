import axios from 'axios';
import { domain } from './api_config.js';

axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;