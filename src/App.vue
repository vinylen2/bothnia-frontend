<template>
  <v-app id="app">
    <Navbar />
    <NavigationDrawer/>
    <v-dialog v-model="loginDialog" persistent>
      <Login />
    </v-dialog>
    <v-content>
      <v-snackbar
        :timeout="snackbar.timeout"
        :color="snackbar.color"
        v-model="snackbar.status"
      > {{snackbar.value}}
      </v-snackbar>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar';
import Login from '@/components/Login';
import NavigationDrawer from '@/components/Navigation/NavigationDrawer';

import { mapGetters } from 'vuex';

export default {
  components: {
    Login,
    Navbar,
    NavigationDrawer
  },
  computed: {
    ...mapGetters([
      'loginDialog',
      'snackbar',
    ]),
  },
};
</script>

