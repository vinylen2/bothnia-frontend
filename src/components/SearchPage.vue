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

import { mapGetters } from 'vuex';

export default {
  components: {
    SearchBar,
    ImageCard,
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  },
  created() {
    if (!this.isLoggedIn) {
      this.$store.commit('showLoginDialog');
    }
  },
  data: () => ({
    images: [
      {
        id: 0,
        name: 'Liggande älg',
        photographer: 'Hans Eriksson',
        date: '2020-05-10',
        imagePath: 'http://mssjakt.se/wp-content/uploads/sites/571/2018/05/moose-moose-rack-male-bull-76972.jpeg',
      },
      {
        id: 1,
        name: 'Liggande älg',
        photographer: 'Hans Eriksson',
        date: '2020-05-10',
        imagePath: 'http://mssjakt.se/wp-content/uploads/sites/571/2018/05/moose-moose-rack-male-bull-76972.jpeg',
      },
      {
        id: 2,
        name: 'Liggande älg',
        photographer: 'Hans Eriksson',
        date: '2020-05-10',
        imagePath: 'http://mssjakt.se/wp-content/uploads/sites/571/2018/05/moose-moose-rack-male-bull-76972.jpeg',
      },
    ],
  }),
};
</script>