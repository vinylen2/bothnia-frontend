<template>
<v-card>
  <v-img
    :src="image.imagePath"
    class="white--text align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
  >
    <v-row justify="center" 
      class="mr-1"
      v-for="tag in tags" 
      :key="tag.id">
      <v-col align="right" class="pa-1">
        <v-chip>{{tag.name}}</v-chip>
      </v-col>
    </v-row>
    <v-card-title class="pb-1 display-1" v-text="image.name"></v-card-title>
    <v-card-title class="pt-0 subtitle-1"  v-text="image.photographer"></v-card-title>
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
  data: () => ({
    tags: [
      {
        id: 0,
        name: 'Djur',
      },
      {
        id: 1,
        name: 'Skog',
      },
      {
        id: 2,
        name: 'Höst',
      },
      {
        id: 3,
        name: 'Natur',
      },
    ],
  }),
};
</script>


