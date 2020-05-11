// import _ from 'lodash';
  /* eslint-disable no-unused-vars */
import api from './api';
import qs from 'qs';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

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
    const data = JSON.stringify({ "name": payload });
    api.post('/tag', data, config)
      .then((response) => {
        console.log(response);
      });
  },
  postPhotographer({commit}, payload) {
    const data = JSON.stringify(payload);
    api.post('/photographer', data, config)
      .then((response) => {
        console.log(response);
      });
  },
  getAllImages({commit}) {
    api.get('/image')
      .then((response) => {
        commit('setImages', response.data);
      });
  },
};