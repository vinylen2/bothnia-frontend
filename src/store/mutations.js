/* eslint-disable no-console */

export const mutations = {
  toggleDrawer: (state) => {
    state.nav.drawer = !state.nav.drawer;
  },
};