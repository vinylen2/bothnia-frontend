<template>
  <v-app id="app">
    <Navbar />
    <NavigationDrawer/>
    <v-dialog v-model="loginDialog">
      <Login />
    </v-dialog>
    <v-content>
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
    ]),
  },
};
</script>

