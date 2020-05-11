// import _ from 'lodash';
  /* eslint-disable no-unused-vars */
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
  getPhotographers({commit}) {
    api.get('/photographer')
      .then((response) => {
        commit('setPhotographers', response.data);
      });
  },
  getTags({commit}) {
    api.get('/tag')
      .then((response) => {
        commit('setTags', response.data);
      });
  },
  postTag({commit}, payload) {
    api.post('/tag', {name: payload})
      .then((response) => {
        console.log(response);
      });
  },
  postPhotographer({commit}, payload) {
    api.post('/photographer', payload)
      .then((response) => {
        console.log(response);
      });
  },
};