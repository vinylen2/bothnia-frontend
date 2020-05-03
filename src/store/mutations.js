export const mutations = {
  toggleDrawer: (state) => {
    state.nav.drawer = !state.nav.drawer;
  },
  showLoginDialog: (state) => {
    state.nav.loginDialog = true;
  },
  logOut: (state) => {
    // fix this 
    state.user.token = null;
  },
};