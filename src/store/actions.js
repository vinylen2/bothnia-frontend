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
    return new Promise((resolve, reject) => {
      api.post('/tag', data, config)
        .then((response) => {
          commit('addTag', response.data);
          resolve(response.data);
        }, error => {
          reject(error);
        })
    })
  },
  postPhotographer({commit}, payload) {
    const data = JSON.stringify(payload);
    return new Promise((resolve, reject) => {
      api.post('/photographer', data, config)
        .then((response) => {
          commit('addPhotographer', response.data);
          resolve(response.data);
        }, error => {
          reject(error);
        })
    })
  },
  getAllImages({commit}) {
    api.get('/image')
      .then((response) => {
        commit('setImages', response.data);
      });
  },
  postImage({commit}, payload) {
    const data = JSON.stringify(payload);
    return new Promise((resolve, reject) => {
      api.post('/photo', data, config)
        .then((response) => {
          resolve(response.data);
        }, error => {
          console.log(error);
          reject(error);
        })
    })

  },
};