// import _ from 'lodash';
import api from './api';

export const actions = {
  getExample() {
    api.get('/example')
      .then((response) => {
        console.log(response.data);
      });
  },
};