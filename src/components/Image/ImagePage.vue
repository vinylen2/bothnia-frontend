<template>
  <v-card
    class="mx-auto pt-2"
    max-width="600"
  >
    <v-img
      class="white--text align-end"
     
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>info från databasen</div>

      <div>Info från databasen</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="teal lighten-1"
        text
      >
        Hämta
      </v-btn>

      <v-btn
        color="teal lighten-1"
        text
      >
        Dela
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'image-page',
  data: () => ({

  }),
};
</script>