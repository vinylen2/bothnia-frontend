export const getters = {
  drawer: (state) => {
    return state.nav.drawer;
  },
  tags: (state) => {
    return state.tags;
  },
  images: (state) => {
    return state.images;
  },
  photographers: (state) => {
    return state.photographers;
  },
  loginDialog: (state) => {
    return state.nav.loginDialog;
  },
  isLoggedIn: (state) => {
    return state.user.token;
  },
};