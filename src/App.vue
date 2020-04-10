<template>
  <v-app id="app">
    <Navbar />
    <NavigationDrawer/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar';
import NavigationDrawer from '@/components/Navigation/NavigationDrawer';

export default {
  components: {
    Navbar,
    NavigationDrawer
  },
};
</script>

