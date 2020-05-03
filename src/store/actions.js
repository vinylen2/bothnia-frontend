// import _ from 'lodash';
import api from './api';

export const actions = {
  auth({state}, payload) {
    api.post('/auth/token', payload)
      .then((response) => {
        console.log(response.data);
        console.log(state);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getExample() {
    api.get('/example')
      .then((response) => {
        console.log(response.data);
      });
  },
};