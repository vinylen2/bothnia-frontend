export const mutations = {
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
  // fix so this is a dynamic databinding
  setImages: (state, payload) => {
    state.images = payload;
  },
};