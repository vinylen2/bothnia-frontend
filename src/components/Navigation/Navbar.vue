<template>
<v-app-bar
  color="teal lighten-1"
  fixed
  app>
  <v-toolbar-items>
    <v-btn text color="white"
      @click="$store.commit('toggleDrawer')">
      <v-icon class="mr-3">mdi-menu</v-icon>
    </v-btn>
  </v-toolbar-items>
  <v-toolbar-items>
      <v-btn text color="white"
        to="/">
        <v-icon class="mr-3">mdi-home</v-icon>
        Hem
      </v-btn>
  </v-toolbar-items>
  <v-toolbar-items>
      <v-btn text color="white"
        to="/search">
        <v-icon class="mr-3">mdi-magnify</v-icon>
        Sök
      </v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items v-if="!isLoggedIn">
      <v-btn text color="white"
        @click="$store.commit('showLoginDialog')"
        to="/search">
        Logga in
      </v-btn>
  </v-toolbar-items>
  <v-toolbar-items v-else>
    <v-btn text color="white"
      to="/profile">
      Profil
      <v-icon class="ml-3">mdi-account-circle</v-icon>
    </v-btn>
  </v-toolbar-items>
</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  },
};
</script>