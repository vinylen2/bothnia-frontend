import axios from 'axios';
import { api } from '../../config.json';

export default axios.create({
  baseURL: api,
  // withCredentials: true,
});