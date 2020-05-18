<template>
<v-card>
  <v-img
    :src="imageSrc"
    height="300px"
    class="white--text align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
  >
    <!-- remove these when hovering -->
    <v-card-title class="pb-1 display-1" v-text="image.name"></v-card-title>
    <v-card-title class="pt-0 subtitle-1"  v-text="authorDate"></v-card-title>
  </v-img>

  <v-card-actions>
    <v-btn text
      :to="'/imagepage/' + image.id">Läs mer</v-btn>
    <v-btn :href="imageSrc" download text target="_blank">Hämta</v-btn>
    <v-spacer></v-spacer>

    <v-chip v-for="tag in image.tags" :key="tag" class="mr-1 ml-1">
      {{tag}}
    </v-chip>
    <div>
    </div>
  </v-card-actions>
</v-card>
</template>

<script>
import moment from 'moment';

export default {
  name: 'image-card',
  props: ['image'],
  computed: {
    authorDate() {
      return this.image.photographer.name + ', ' + moment(this.image.created).format('YYYY-MM-DD');
    },
    tags() {
      return this.image.imageTags.map(tag => tag.tag.name);
    },
    imageSrc() {
      return `http://94.237.89.244:7777/files/${this.image.id}.jpg`;
    },
  },
  data: () => ({
  }),
  methods: {
    downloadImage() {
      console.log('download');
    },
  },
};
</script>


