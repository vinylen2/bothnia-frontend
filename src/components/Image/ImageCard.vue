<template>
<v-card>
  <v-img
    :src="image.imagePath"
    class="white--text align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
  >
    <!-- remove these when hovering -->
    <v-card-title class="pb-1 display-1" v-text="image.name"></v-card-title>
    <v-card-title class="pt-0 subtitle-1"  v-text="authorDate"></v-card-title>
  </v-img>

  <v-card-actions>
    <v-btn text>Läs mer</v-btn>
    <v-btn text>Hämta</v-btn>
    <v-spacer></v-spacer>

    <v-chip v-for="tag in tags" :key="tag.id" class="mr-1 ml-1">
      {{tag.name}}
    </v-chip>
    <div>
    </div>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: 'image-card',
  props: ['image'],
  computed: {
    authorDate() {
      return this.image.photographer + ', ' + this.image.date;
    },
  },
  data: () => ({
    tags: [
      {
        id: 0,
        name: 'Djur',
      },
      // {
      //   id: 1,
      //   name: 'Skog',
      // },
      // {
      //   id: 2,
      //   name: 'Höst',
      // },
      // {
      //   id: 3,
      //   name: 'Natur',
      // },
    ],
  }),
};
</script>


