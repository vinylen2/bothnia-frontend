export const getters = {
  drawer: (state) => {
    return state.nav.drawer;
  },
  tags: (state) => {
    return state.tags;
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