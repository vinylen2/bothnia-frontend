export const mutations = {
  setUser: (state, payload) => {
    state.user = payload;
  },
  toggleDrawer: (state) => {
    state.nav.drawer = !state.nav.drawer;
  },
  showLoginDialog: (state) => {
    state.nav.loginDialog = true;
  },
  closeLoginDialog: (state) => {
    state.nav.loginDialog = false;
  },
  logOut: (state) => {
    // fix this 
    state.user.token = null;
  },
  setPhotographers: (state, payload) => {
    state.photographers = payload;
  },
  setTags: (state, payload) => {
    state.tags = payload;
  },
  addTag: (state, payload) => {
    state.tags.push(payload);
  },
  addPhotographer: (state, payload) => {
    state.photographers.push(payload);
  },
  // fix so this is a dynamic databinding
  setImages: (state, payload) => {
    state.images = payload;
  },
  setSelectedArray: (state, payload) => {
    switch (payload.type) {
      case 'tag':
        state.selectedTags = payload.data;
        break;
      case 'photographer':
        state.selectedPhotographers = payload.data;
        break;
    }
  },
  eraseSelected: (state) => {
    state.selectedTags = null;
    state.selectedPhotographers = null;
  },
  errorSnackbar: (state, text) => {
    state.snackbar = {
      status: true,
      value: text,
      color: 'red lighten-2',
      timeout: 5000,
      hasLink: false,
    };
  },
  successSnackbar: (state, text) => {
    state.snackbar = {
      status: true,
      value: text,
      color: 'green lighten-2',
      timeout: 5000,
      hasLink: false,
    };
  },
};