<template>
<v-app-bar
  color="blue lighten-2"
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
</v-app-bar>
</template>

<script>
export default {

};
</script>