<template>
 <v-content >
   <h1></h1>
    
  </v-content>
</template>

<script>


import { mapGetters, mapActions } from 'vuex';

export default {
name: 'image-info',
data: () => ({
    
  }),
computed: {
    ...mapGetters([
      'isLoggedIn',
      'images',
      'photographers'
    ]),
    ...mapActions([
      'getPhotographers',
      'getTags',
      'getAllImages',
    ])
  },
  created() {
this.getPhotographers;
    this.getTags;
    this.getAllImages;
  },
}
</script>

<style>

</style>