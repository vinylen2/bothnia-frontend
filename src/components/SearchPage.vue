<template>
  <v-content class="pt-0">
    <div v-if="isLoggedIn">
      <SearchBar />
      <v-row class="ma-2">
        <v-col cols="12" md="6" lg="4"
          v-for="image in images" 
          :key="image.id">
          <ImageCard 
            :image="image"
          />
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
import SearchBar from '@/components/Search/SearchBar';
import ImageCard from '@/components/Image/ImageCard';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    SearchBar,
    ImageCard,
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'images',
    ]),
    ...mapActions([
      'getPhotographers',
      'getTags',
      'getAllImages',
    ])
  },
  created() {
    if (!this.isLoggedIn) {
      this.$store.commit('showLoginDialog');
    }
    this.getPhotographers;
    this.getTags;
    this.getAllImages;
  },
  data: () => ({
  }),
};
</script>