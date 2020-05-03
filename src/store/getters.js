export const getters = {
  drawer: (state) => {
    return state.nav.drawer;
  },
  grades: (state) => {
    return state.grades;
  },
  loginDialog: (state) => {
    return state.nav.loginDialog;
  },
  isLoggedIn: (state) => {
    return state.user.token;
  },
};